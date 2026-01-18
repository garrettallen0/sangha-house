import { NextResponse } from 'next/server';
import { getBannerImage } from '@/sanity/lib/queries';

export async function GET() {
  try {
    const bannerImage = await getBannerImage();
    return NextResponse.json(bannerImage);
  } catch (error) {
    return NextResponse.json({ error: 'Failed to fetch banner' }, { status: 500 });
  }
}

