import { NextRequest, NextResponse } from 'next/server';
import { verifyCredentials, createToken, setAuthCookie, clearAuthCookie } from '@/lib/admin-auth';

export async function POST(request: NextRequest) {
  try {
    const { username, password } = await request.json();

    if (!username || !password) {
      return NextResponse.json(
        { error: 'Username and password are required.' },
        { status: 400 }
      );
    }

    const user = await verifyCredentials(username, password);

    if (!user) {
      return NextResponse.json(
        { error: 'Invalid credentials.' },
        { status: 401 }
      );
    }

    const token = await createToken(user.id, user.username);
    setAuthCookie(token);

    return NextResponse.json({ success: true, username: user.username });
  } catch (error) {
    console.error('Auth error:', error);
    return NextResponse.json(
      { error: 'Server error.' },
      { status: 500 }
    );
  }
}

export async function DELETE() {
  clearAuthCookie();
  return NextResponse.json({ success: true });
}
