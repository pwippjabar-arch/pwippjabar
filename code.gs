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
          var paragraphs = [];
          
          for (var j = 0; j < numChildren; j++) {
            var child = body.getChild(j);
            var type = child.getType();
            
            if (type === DocumentApp.ElementType.PARAGRAPH) {
              paragraphs.push(child.asParagraph().getText());
            } else if (type === DocumentApp.ElementType.LIST_ITEM) {
              paragraphs.push(child.asListItem().getText());
            } else if (type === DocumentApp.ElementType.TABLE) {
              var table = child.asTable();
              for (var r = 0; r < table.getNumRows(); r++) {
                var row = table.getRow(r);
                for (var c = 0; c < row.getNumCells(); c++) {
                  paragraphs.push(row.getCell(c).getText());
                }
              }
            }
          }
          
          fullContent = paragraphs.join("\n");
          snippet = fullContent.length > 150 ? fullContent.substring(0, 150) + "..." : fullContent;
        } catch (e) {
          fullContent = "Gagal memuat isi dokumen. Pastikan akses Google Docs telah diatur ke 'Siapa saja yang memiliki link'.";
          snippet = fullContent;
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
