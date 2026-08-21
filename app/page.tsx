const API_URL = "https://script.google.com/macros/s/AKfycbyZEvaP9ugDhxOsXd1Sj7L3ouZiB4h5LD_zO9X1ZTZpuCgtosgN3_CWlZncm6tHBC6Q/exec";

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

export interface OpiniItem {
  id: number | string;
  judul: string;
  penulis: string;
  asalDaerah: string;
  tanggal: string;
  ringkasan: string;
  linkTulisan: string;
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
  const list = await fetchFromApi<GaleriItem>('getGaleriData');
  return [...list].reverse();
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

export async function getOpiniData(): Promise<OpiniItem[]> {
  try {
    return await fetchFromApi<OpiniItem>('getOpiniData');
  } catch (err) {
    console.error('Gagal mengambil opini:', err);
    return [];
  }
}


