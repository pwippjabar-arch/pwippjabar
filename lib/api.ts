const API_URL = "https://script.google.com/macros/s/AKfycbwpm2x1x1Qaslv_ljCcSHv4hTm0-ylaFfZDD7dRIO8IREDSXG0e7BVfQGdrAojTqROi/exec";

export interface BeritaItem {
  id: number | string;
  judul: string;
  snippet: string;
  fullContent: string;
  foto: string;
  author: string;
  tanggal: string;
}

export interface TasykilItem {
  id: number | string;
  nama: string;
  jabatan: string;
  bidang: string;
  foto: string;
}

export interface GaleriItem {
  id: number | string;
  judul: string;
  foto: string;
}

export interface PendaftaranItem {
  id: number | string;
  namaKegiatan: string;
  deskripsi: string;
  tanggal: string;
  tempat: string;
  status: string;
  linkGForm: string;
}

export interface DaerahItem {
  id: number | string;
  nama: string;
  tipe: string; // 'PD' atau 'BKC'
  wilayah: string;
  ketua: string;
  instagram: string;
  kontak: string;
}

export interface PengumumanItem {
  id: number | string;
  judul: string;
  tanggal: string;
  kategori: string; // 'Maklumat', 'Siaran Pers', 'Pemberitahuan'
  isi: string;
  linkDokumen: string;
}

async function fetchFromApi<T>(action: string): Promise<T[]> {
  const res = await fetch(`${API_URL}?action=${action}`, { next: { revalidate: 60 } });
  if (!res.ok) throw new Error(`HTTP error: ${res.status}`);
  const json = await res.json();
  if (json && json.status === 'error') throw new Error(json.message);
  return Array.isArray(json) ? json : (json.data ?? []);
}

export async function getBeritaData(): Promise<BeritaItem[]> {
  const list = await fetchFromApi<BeritaItem>('getBeritaData');
  return list.sort((a, b) => Number(b.id) - Number(a.id));
}

export async function getBeritaById(id: string): Promise<BeritaItem | null> {
  try {
    const list = await getBeritaData();
    return list.find((b) => String(b.id) === String(id)) ?? null;
  } catch {
    return null;
  }
}

export async function getTasykilData(): Promise<TasykilItem[]> {
  return fetchFromApi<TasykilItem>('getTasykilData');
}

export async function getGaleriData(): Promise<GaleriItem[]> {
  return fetchFromApi<GaleriItem>('getGaleriData');
}

export async function getPendaftaranData(): Promise<PendaftaranItem[]> {
  return fetchFromApi<PendaftaranItem>('getPendaftaranData');
}

export async function getDaerahData(): Promise<DaerahItem[]> {
  return fetchFromApi<DaerahItem>('getDaerahData');
}

export async function getPengumumanData(): Promise<PengumumanItem[]> {
  try {
    return await fetchFromApi<PengumumanItem>('getPengumumanData');
  } catch (err) {
    console.error('Gagal mengambil pengumuman:', err);
    return [];
  }
}

