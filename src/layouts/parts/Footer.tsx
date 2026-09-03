import { Link } from 'react-router';
import { site } from 'virtual:content';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative overflow-hidden border-t-2 border-dashed border-border bg-muted">
      <div className="absolute -left-8 top-7 h-24 w-24 rotate-12 rounded-[1.5rem] border-4 border-secondary" aria-hidden="true" />
      <div className="relative mx-auto grid max-w-6xl gap-10 px-5 py-14 md:grid-cols-[1fr_auto] md:items-end">
        <div className="max-w-sm">
          <Link to="/" aria-label="Say Hello home">
            <img src="/airo-assets/images/logo/horizontal" alt={site.brandName} className="h-auto max-h-10 w-auto max-w-full object-contain" width="160" height="60" loading="lazy" fetchPriority="auto" />
          </Link>
          <p className="mt-5 text-lg font-bold text-foreground">{site.tagline}</p>
          <p className="mt-2 text-sm text-muted-foreground">A tiny bright spot, sent with care.</p>
        </div>
        <div className="grid gap-4 text-left md:text-right">
          <nav aria-label="Footer links" className="flex flex-wrap gap-x-5 gap-y-3 md:justify-end">
            {site.footerLinks.map((item) => <a key={item.href} href={item.href} className="text-sm font-bold text-foreground underline-offset-4 hover:text-primary hover:underline">{item.label}</a>)}
          </nav>
          <p className="font-heading text-xl text-secondary">Keep in touch, you lovely human.</p>
          <p className="text-xs text-muted-foreground">© {currentYear} {site.brandName}</p>
        </div>
      </div>
    </footer>
  );
}
