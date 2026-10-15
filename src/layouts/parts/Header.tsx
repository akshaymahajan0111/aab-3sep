import { Link } from 'react-router';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';
import { site } from 'virtual:content';
import { useSession, signOut } from '@/lib/auth/auth-client';

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { session, isPending } = useSession();
  const user = session?.user;

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background">
      <div className="mx-auto max-w-6xl px-5">
        <div className="flex min-h-20 items-center justify-between gap-5">
          <Link to="/" className="min-w-0 shrink" aria-label="Say Hello home">
            <img
              src="/airo-assets/images/logo/horizontal"
              alt={site.brandName}
              className="block h-auto max-h-10 w-auto max-w-full object-contain md:max-h-12"
              width="180"
              height="70"
              loading="eager"
              fetchPriority="high"
            />
          </Link>
          <nav aria-label="Main navigation" className="hidden items-center gap-7 md:flex">
            {site.navigation.map((item) => (
              <a key={item.href} href={item.href} className="text-sm font-bold text-foreground underline-offset-4 transition-colors hover:text-primary hover:underline">
                {item.label}
              </a>
            ))}
          </nav>

          {/* Desktop auth */}
          <div className="hidden items-center gap-3 md:flex">
            {!isPending && (
              user ? (
                <>
                  <span className="text-sm font-bold text-foreground">Hi, {user.name || user.email}</span>
                  <button
                    onClick={() => signOut().then(() => { window.location.href = '/'; })}
                    className="rounded-full border-2 border-primary px-4 py-2 text-sm font-extrabold text-primary transition-colors hover:bg-primary hover:text-primary-foreground"
                  >
                    Sign out
                  </button>
                </>
              ) : (
                <>
                  <Link to="/login" className="text-sm font-bold text-foreground underline-offset-4 hover:text-primary hover:underline">
                    Log in
                  </Link>
                  <Link to="/signup" className="rounded-full bg-primary px-5 py-2.5 text-sm font-extrabold text-primary-foreground transition-transform duration-200 hover:-translate-y-0.5">
                    Sign up
                  </Link>
                </>
              )
            )}
          </div>

          <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="rounded-full border border-border bg-card p-2 text-foreground md:hidden" aria-label="Toggle menu">
            {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        {isMobileMenuOpen && (
          <nav aria-label="Mobile navigation" className="grid gap-3 border-t border-border py-5 md:hidden">
            {site.navigation.map((item) => (
              <a key={item.href} href={item.href} onClick={() => setIsMobileMenuOpen(false)} className="font-bold text-foreground">{item.label}</a>
            ))}
            {!isPending && (
              user ? (
                <>
                  <span className="text-sm font-bold text-foreground">Hi, {user.name || user.email}</span>
                  <button
                    onClick={() => { signOut().then(() => { window.location.href = '/'; }); setIsMobileMenuOpen(false); }}
                    className="w-fit rounded-full border-2 border-primary px-5 py-2.5 text-sm font-extrabold text-primary"
                  >
                    Sign out
                  </button>
                </>
              ) : (
                <>
                  <Link to="/login" onClick={() => setIsMobileMenuOpen(false)} className="font-bold text-foreground hover:text-primary">Log in</Link>
                  <Link to="/signup" onClick={() => setIsMobileMenuOpen(false)} className="w-fit rounded-full bg-primary px-5 py-2.5 text-sm font-extrabold text-primary-foreground">Sign up</Link>
                </>
              )
            )}
          </nav>
        )}
      </div>
    </header>
  );
}
