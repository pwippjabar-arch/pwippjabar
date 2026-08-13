function doGet(e) {
  // Jika dipanggil via REST API (misal dari Vercel/GitHub Pages atau browser dengan query parameter ?action=...)
  var action = (e && e.parameter && e.parameter.action) ? e.parameter.action : null;
  
  if (action) {
    var result = {};
    try {
      if (action === 'getTasykilData') {
        result = getTasykilData();
      } else if (action === 'getBeritaData') {
        result = getBeritaData();
      } else if (action === 'getGaleriData') {
        result = getGaleriData();
      } else if (action === 'getPendaftaranData') {
        result = getPendaftaranData();
      } else if (action === 'all') {
        result = {
          tasykil: getTasykilData(),
          berita: getBeritaData(),
          galeri: getGaleriData(),
          pendaftaran: getPendaftaranData()
        };
      } else {
        result = { status: 'error', message: 'Action ' + action + ' tidak dikenal' };
      }
    } catch (err) {
      result = { status: 'error', message: err.toString() };
    }

    return ContentService
      .createTextOutput(JSON.stringify(result))
      .setMimeType(ContentService.MimeType.JSON);
  }

  // Jika dibuka langsung di browser Google Apps Script (HTML View)
  var template;
  try {
    template = HtmlService.createTemplateFromFile('index');
  } catch (err) {
    template = HtmlService.createTemplateFromFile('Index');
  }

  return template
    .evaluate()
    .setTitle('PW IPP Jawa Barat')
    .addMetaTag('viewport', 'width=device-width, initial-scale=1.0')
    .setXFrameOptionsMode(HtmlService.XFrameOptionsMode.ALLOWALL);
}

// Deklarasi ID Spreadsheet Global
var SPREADSHEET_ID = '1_ln3ELTWk06IxYJ5_hFtfEW_G6_3QQP2Ge_Fi9SwAfg';

function getTasykilData() {
  try {
    var ss = SpreadsheetApp.openById(SPREADSHEET_ID);
    var sheet = ss.getSheetByName('Tasykil');
    
    if (!sheet) {
      throw new Error("Sheet bernama 'Tasykil' tidak ditemukan.");
    }
    
    var data = sheet.getDataRange().getValues();
    var result = [];
    
    for (var i = 1; i < data.length; i++) {
      var row = data[i];
      if (row[0] && row[0].toString().trim() !== "") {
        result.push({
          nama: row[0].toString().trim(),
          jabatan: row[1] ? row[1].toString().trim() : '',
          bidang: row[2] ? row[2].toString().trim() : 'Exofficio',
          foto: row[3] ? row[3].toString().trim() : ''
        });
      }
    }
    return result;
  } catch (error) {
    throw new Error(error.message);
  }
}

function getBeritaData() {
  try {
    var ss = SpreadsheetApp.openById(SPREADSHEET_ID);
    var sheet = ss.getSheetByName('Berita');
    
    if (!sheet) return [];
    
    var data = sheet.getDataRange().getValues();
    var result = [];
    
    for (var i = 1; i < data.length; i++) {
      var judul = data[i][0];
      var tanggal = data[i][1];
      var author = data[i][2];
      var rawFotoUrl = data[i][3];
      var docUrl = data[i][4];

      if (!judul) continue;

      if (tanggal instanceof Date) {
        tanggal = Utilities.formatDate(tanggal, Session.getScriptTimeZone(), "dd MMMM yyyy");
      }

      var fotoDirectUrl = convertGDriveUrl(rawFotoUrl);
      var docId = extractDocId(docUrl);
      var fullContent = "";
      var snippet = "";

      if (docId) {
        try {
          var doc = DocumentApp.openById(docId);
          var body = doc.getBody();
          var numChildren = body.getNumChildren();
          var htmlParts = [];
          var plainTexts = [];
          
          for (var j = 0; j < numChildren; j++) {
            var child = body.getChild(j);
            var type = child.getType();
            
            if (type === DocumentApp.ElementType.PARAGRAPH) {
              var paragraph = child.asParagraph();
              var text = paragraph.getText().trim();
              plainTexts.push(text);
              
              // Check for inline images inside paragraph
              var numParagraphChildren = paragraph.getNumChildren();
              var hasImage = false;
              var paraHtml = "";
              
              for (var k = 0; k < numParagraphChildren; k++) {
                var pChild = paragraph.getChild(k);
                if (pChild.getType() === DocumentApp.ElementType.INLINE_IMAGE) {
                  hasImage = true;
                  try {
                    var img = pChild.asInlineImage();
                    var blob = img.getBlob();
                    var base64 = Utilities.base64Encode(blob.getBytes());
                    var dataUrl = "data:" + blob.getContentType() + ";base64," + base64;
                    paraHtml += '<img src="' + dataUrl + '" alt="Foto Dokumentasi" class="w-full max-w-lg mx-auto rounded-2xl my-6 shadow-sm object-cover" />';
                  } catch (e) {
                    paraHtml += '[Gambar gagal dimuat]';
                  }
                } else {
                  paraHtml += escapeHtml(pChild.getText());
                }
              }
              
              if (hasImage) {
                htmlParts.push(paraHtml);
              } else if (text !== "") {
                htmlParts.push('<p class="text-justify leading-relaxed mb-4">' + escapeHtml(text) + '</p>');
              }
            } else if (type === DocumentApp.ElementType.LIST_ITEM) {
              var listItem = child.asListItem();
              plainTexts.push(listItem.getText());
              htmlParts.push('<li class="list-disc list-inside ml-4 mb-2 text-justify">' + escapeHtml(listItem.getText()) + '</li>');
            } else if (type === DocumentApp.ElementType.TABLE) {
              var table = child.asTable();
              var tableHtml = '<div class="overflow-x-auto my-6"><table class="min-w-full divide-y divide-gray-200 border border-gray-100 rounded-xl">';
              for (var r = 0; r < table.getNumRows(); r++) {
                tableHtml += '<tr class="border-b border-gray-100">';
                var row = table.getRow(r);
                for (var c = 0; c < row.getNumCells(); c++) {
                  var cellText = row.getCell(c).getText();
                  plainTexts.push(cellText);
                  tableHtml += '<td class="px-4 py-3 text-sm text-gray-600 border-r border-gray-100">' + escapeHtml(cellText) + '</td>';
                }
                tableHtml += '</tr>';
              }
              tableHtml += '</table></div>';
              htmlParts.push(tableHtml);
            }
          }
          
          fullContent = htmlParts.join("");
          var plainTextAll = plainTexts.join(" ");
          snippet = plainTextAll.length > 150 ? plainTextAll.substring(0, 150) + "..." : plainTextAll;
        } catch (e) {
          fullContent = "<p>Gagal memuat isi dokumen. Pastikan akses Google Docs telah diatur ke 'Siapa saja yang memiliki link'.</p>";
          snippet = "Gagal memuat isi dokumen.";
        }
      }

      result.push({
        id: i,
        judul: judul,
        tanggal: tanggal,
        author: author,
        foto: fotoDirectUrl,
        snippet: snippet,
        fullContent: fullContent
      });
    }
    return result;
  } catch (e) {
    return [];
  }
}

function escapeHtml(text) {
  if (!text) return "";
  return text
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

function convertGDriveUrl(url) {
  if (!url) return 'https://via.placeholder.com/600x400?text=No+Image';
  var match = url.match(/[-\w]{25,}/);
  if (match) {
    return 'https://lh3.googleusercontent.com/d/' + match[0];
  }
  return url;
}

// Fixed Regex
function extractDocId(url) {
  if (!url) return null;
  var match = url.match(/\/d\/([a-zA-Z0-9_-]+)/);
  return match ? match[1] : null;
}

function getGaleriData() {
  try {
    var ss = SpreadsheetApp.openById(SPREADSHEET_ID);
    var sheet = ss.getSheetByName('Galeri');
    
    if (!sheet) return [];
    
    var data = sheet.getDataRange().getValues();
    if (data.length <= 1) return [];
    
    var result = [];
    for (var i = 1; i < data.length; i++) {
      var judul = data[i][0] ? data[i][0].toString().trim() : 'Kegiatan PW IPP';
      var rawFotoUrl = data[i][1] ? data[i][1].toString().trim() : '';

      if (!rawFotoUrl) continue;

      var fotoDirectUrl = convertGDriveUrl(rawFotoUrl);

      result.push({
        judul: judul,
        foto: fotoDirectUrl
      });
    }
    return result;
  } catch (e) {
    return [];
  }
}

function getPendaftaranData() {
  try {
    var ss = SpreadsheetApp.openById(SPREADSHEET_ID);
    var sheet = ss.getSheetByName('Pendaftaran');
    
    if (!sheet) return [];
    
    var data = sheet.getDataRange().getValues();
    if (data.length <= 1) return [];
    
    var result = [];
    for (var i = 1; i < data.length; i++) {
      var row = data[i];
      var namaKegiatan = row[0] ? row[0].toString().trim() : '';
      if (!namaKegiatan) continue;

      var deskripsi = row[1] ? row[1].toString().trim() : '';
      var status = row[2] ? row[2].toString().trim() : 'Tutup';
      
      var tanggal = row[3];
      if (tanggal instanceof Date) {
        tanggal = Utilities.formatDate(tanggal, Session.getScriptTimeZone(), "dd MMMM yyyy");
      } else {
        tanggal = tanggal ? tanggal.toString().trim() : '-';
      }

      var tempat = row[4] ? row[4].toString().trim() : '-';
      var linkGForm = row[5] ? row[5].toString().trim() : '#';

      result.push({
        namaKegiatan: namaKegiatan,
        deskripsi: deskripsi,
        status: status,
        tanggal: tanggal,
        tempat: tempat,
        linkGForm: linkGForm
      });
    }
    return result;
  } catch (e) {
    return [];
  }
}
