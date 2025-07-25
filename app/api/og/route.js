/* eslint-disable @next/next/no-img-element */
import { ImageResponse } from '@vercel/og';

export const runtime = 'edge';

export async function GET(req) {
	const { searchParams } = new URL(req.url);
	const username = searchParams.get('username') || 'Anonymous';
	const wpm = searchParams.get('wpm') || 0;
	const acc = searchParams.get('acc') || 0;

	// ✅ Replace these URLs with your deployed asset URLs
	const bgUrl = `${process.env.NEXT_PUBLIC_BASE_URL}/bg.png`;
	const logoUrl = `${process.env.NEXT_PUBLIC_BASE_URL}/graylogo.png`;

	return new ImageResponse(
		(
			<div
				style={{
					display: 'flex',
					fontFamily: 'sans-serif',
					position: 'relative',
					width: '1200px',
					height: '630px',
					backgroundRepeat: 'no-repeat',
					backgroundSize: 'cover',
					backgroundImage: `url(${bgUrl})`,
				}}
			>
				{/* Header */}
				<div style={{
					position: 'absolute',
					top: 40,
					left: 40,
					display: 'flex',
					alignItems: 'center',
					gap: 10,
				}}>
					<img
						src={logoUrl}
						width={80}
						height={46}
						alt="logo"
					/>
					<p style={{ color: '#fff', fontSize: 30 }}>DinoTypeTest</p>
					<span style={{ width: 2, height: 26, background: '#eee' }} />
					<p style={{ color: '#fff', fontSize: 20 }}>Typing Speed Test</p>
				</div>

				{/* Title */}
				<h1 style={{
					fontSize: 68,
					color: '#fff',
					position: 'absolute',
					top: 166,
					left: 40,
				}}>
					I&apos;m a T-Rex
				</h1>

				{/* WPM */}
				<p style={{
					fontSize: 32,
					color: '#fff',
					position: 'absolute',
					top: 270,
					left: 42,
				}}>
					@{username} types <span
						style={{
							background: 'white',
							color: 'black',
							padding: '4px 8px',
							borderRadius: 4,
							marginLeft: '10px',
						}}
					>
						{wpm} words
					</span>
					<span
						style={{
							marginLeft: '10px',
						}}
					>
						per minute.
					</span>
				</p>

				{/* Additional lines */}
				<p style={{ fontSize: 32, color: '#fff', position: 'absolute', top: 324, left: 42 }}>
					Can you type fast enough...
				</p>
				<p style={{ fontSize: 32, color: '#fff', position: 'absolute', top: 366, left: 42 }}>
					to outrun a T-Rex?
				</p>
				<p style={{ fontSize: 32, color: '#fff', position: 'absolute', top: 408, left: 42 }}>
					Chase Me!
				</p>

				{/* Footer */}
				<p style={{ fontSize: 22, color: '#fff', position: 'absolute', top: 500, left: 42 }}>
					Test your typing speed now at dinotypetest.netlify.app
				</p>
			</div>
		),
		{
			width: 1200,
			height: 630,
			headers: {
				'Cache-Control': 'public, max-age=3600, stale-while-revalidate=86400',
			},
		}
	);
}
