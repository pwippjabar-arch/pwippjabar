import { NextResponse } from 'next/server';

const API_URL = 'https://script.google.com/macros/s/AKfycbyZEvaP9ugDhxOsXd1Sj7L3ouZiB4h5LD_zO9X1ZTZpuCgtosgN3_CWlZncm6tHBC6Q/exec';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { nama, asal, kategori, pesan } = body;

    if (!pesan || !pesan.trim()) {
      return NextResponse.json(
        { status: 'error', message: 'Pesan aspirasi tidak boleh kosong.' },
        { status: 400 }
      );
    }

    const queryParams = new URLSearchParams({
      action: 'sendAspirasi',
      nama: nama || 'Anonim',
      asal: asal || '-',
      kategori: kategori || 'Usulan Kegiatan',
      pesan: pesan.trim(),
    });

    const res = await fetch(`${API_URL}?${queryParams.toString()}`, {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
      },
    });

    if (!res.ok) {
      return NextResponse.json(
        { status: 'error', message: `Google Apps Script returned status ${res.status}` },
        { status: 500 }
      );
    }

    const data = await res.json();
    return NextResponse.json(data);
  } catch (error: any) {
    console.error('Error submitting aspirasi:', error);
    return NextResponse.json(
      { status: 'error', message: error.message || 'Gagal mengirim aspirasi.' },
      { status: 500 }
    );
  }
}
