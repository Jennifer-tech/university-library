import config from "@/lib/config";
import ImageKit from "imagekit";
import { NextResponse } from "next/server";

const {
  env: {
    imagekit: { publicKey, privateKey, urlEndpoint },
  },
} = config;

const imagekit = new ImageKit({
  publicKey,
  privateKey,
  urlEndpoint,
});

export async function GET() {
  try {
    const params = imagekit.getAuthenticationParameters()
    console.log('params', params)
    return NextResponse.json(params);
  } catch (error: any) {
    return NextResponse.json(
      {
        message: "Failed to generate authentication parameters",
        error: error.message,
      },
      { status: 500 }
    );
  }
}
