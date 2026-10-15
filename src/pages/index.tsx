import { useState } from 'react';
import { Helmet } from '@dr.pogodin/react-helmet';
import { ArrowRight, Heart, Send, Sparkles } from 'lucide-react';
import { motion, useReducedMotion } from 'motion/react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { home } from 'virtual:content';

const siteUrl = 'https://5m21197sax.preview.c40.airoapp.ai';

export default function HomePage() {
  const [message, setMessage] = useState('');
  const [recipient, setRecipient] = useState('');
  const [activeCatId, setActiveCatId] = useState(home.templateSection.categories[0]?.id ?? '');
  const reduceMotion = useReducedMotion();

  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      { '@type': 'WebSite', '@id': `${siteUrl}/#website`, name: 'Say Hello', url: `${siteUrl}/` },
      { '@type': 'Organization', '@id': `${siteUrl}/#organization`, name: 'Say Hello', url: `${siteUrl}/` },
      { '@type': 'WebPage', '@id': `${siteUrl}/#webpage`, name: home.seo.title, url: `${siteUrl}/`, isPartOf: { '@id': `${siteUrl}/#website` }, about: { '@id': `${siteUrl}/#organization` }, datePublished: '2026-09-03', dateModified: '2026-09-03' },
    ],
  };

  return (
    <>
      <Helmet>
        <title>{home.seo.title}</title>
        <meta name="description" content={home.seo.description} />
        <link rel="canonical" href={`${siteUrl}/`} />
        <meta property="og:title" content={home.seo.title} />
        <meta property="og:description" content={home.seo.description} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={`${siteUrl}/`} />
        <meta property="og:image" content={`${siteUrl}/airo-assets/images/logo/horizontal`} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={home.seo.title} />
        <meta name="twitter:description" content={home.seo.description} />
        <meta name="twitter:image" content={`${siteUrl}/airo-assets/images/logo/horizontal`} />
        <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
      </Helmet>
      <main className="overflow-hidden">
        <section id="send-hello" className="relative px-5 pb-20 pt-14 md:pb-28 md:pt-20">
          <div className="pointer-events-none absolute left-[6%] top-12 h-24 w-24 rotate-[-12deg] rounded-2xl border-[10px] border-accent" aria-hidden="true" />
          <motion.div animate={reduceMotion ? undefined : { y: [0, -7, 0] }} transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }} className="pointer-events-none absolute right-[5%] top-16 hidden h-28 w-28 rotate-[14deg] rounded-[2.4rem] border-[10px] border-secondary md:block" aria-hidden="true" />
          <div className="relative mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-[0.85fr_1.15fr]">
            <div className="relative z-10">
              <p className="inline-flex -rotate-2 items-center gap-2 rounded-full bg-accent px-4 py-2 text-sm font-extrabold text-accent-foreground shadow-sm"><Sparkles size={16} />{home.hero.eyebrow}</p>
              <h1 className="mt-7 max-w-xl text-6xl font-bold leading-[0.94] text-foreground md:text-7xl lg:text-8xl">{home.hero.title}</h1>
              <p className="mt-6 max-w-md text-lg font-semibold leading-relaxed text-muted-foreground">{home.hero.body}</p>
              <div className="relative mt-10 h-20 max-w-md" aria-hidden="true">
                <div className="absolute left-4 top-6 h-px w-48 border-t-2 border-dashed border-secondary" />
                <div className="absolute left-48 top-3 h-10 w-12 rounded-full border-t-2 border-secondary" />
                <Heart className="absolute right-14 top-1 fill-primary text-primary" size={28} />
              </div>
            </div>

            <motion.form
              initial={reduceMotion ? false : { opacity: 0, rotate: 3, y: 24 }}
              animate={{ opacity: 1, rotate: 1, y: 0 }}
              transition={{ duration: 0.45, ease: 'easeOut' }}
              className="relative z-10 border-2 border-foreground bg-card p-5 shadow-[10px_12px_0_hsl(var(--secondary))] sm:p-8"
              onSubmit={(event) => event.preventDefault()}
            >
              <div className="pointer-events-none absolute inset-y-0 left-0 w-4 border-r-4 border-dashed border-primary" aria-hidden="true" />
              <div className="pointer-events-none absolute -right-5 -top-6 grid h-24 w-24 place-items-center rounded-full border-4 border-card bg-primary text-center text-lg font-heading font-bold leading-none text-primary-foreground shadow-sm" aria-hidden="true">just<br />because</div>
              <div className="ml-3">
                <div className="flex items-start justify-between gap-4 border-b-2 border-dashed border-border pb-5">
                  <div>
                    <p className="font-heading text-3xl font-bold text-secondary">A fresh hello, from GH!</p>
                    <p className="text-sm font-bold text-muted-foreground">Delivered with a little lift.</p>
                  </div>
                  <Send className="text-primary" size={27} aria-hidden="true" />
                </div>
                <div className="mt-6 grid gap-5">
                  <div className="grid gap-2">
                    <Label htmlFor="recipient" className="font-extrabold text-foreground">{home.hero.recipientLabel}</Label>
                    <Input id="recipient" value={recipient} onChange={(event) => setRecipient(event.target.value)} placeholder="Someone you'd like to surprise" className="rounded-none border-0 border-b-2 border-foreground bg-transparent px-0 text-base shadow-none focus-visible:ring-0" />
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="message" className="font-extrabold text-foreground">{home.hero.messageLabel}</Label>
                    <Textarea id="message" value={message} onChange={(event) => setMessage(event.target.value)} placeholder="Hey! Just wanted you to know I'm cheering for you today." className="min-h-28 rounded-none border-2 border-border bg-background text-base shadow-none focus-visible:border-secondary focus-visible:ring-0" />
                  </div>

                  {/* Template picker */}
                  <div className="border-t-2 border-dashed border-border pt-6">
                    <p className="mb-3 text-sm font-extrabold uppercase tracking-wide text-muted-foreground">{home.templateSection.eyebrow}</p>

                    {/* Category tabs */}
                    <div className="flex flex-wrap gap-2" role="group" aria-label="Template categories">
                      {home.templateSection.categories.map((cat) => (
                        <button
                          key={cat.id}
                          type="button"
                          onClick={() => setActiveCatId(cat.id)}
                          aria-pressed={activeCatId === cat.id}
                          className={`rounded-full border-2 px-3 py-1.5 text-xs font-extrabold transition-all duration-150 ${
                            activeCatId === cat.id
                              ? 'border-secondary bg-secondary text-secondary-foreground'
                              : 'border-border bg-card text-foreground hover:border-secondary hover:text-secondary'
                          }`}
                        >
                          <span aria-hidden="true">{cat.emoji} </span>
                          {cat.label}
                        </button>
                      ))}
                    </div>

                    {/* Template chips — rendered for every category, shown/hidden by CSS */}
                    {home.templateSection.categories.map((cat) => (
                      <div
                        key={cat.id}
                        className={`mt-4 flex flex-wrap gap-2 ${activeCatId === cat.id ? 'block' : 'hidden'}`}
                      >
                        {cat.templates.map((tpl) => (
                          <button
                            key={tpl.id}
                            type="button"
                            onClick={() => setMessage(tpl.text)}
                            className="rounded-full border-2 border-primary bg-card px-3 py-2 text-left text-xs font-bold text-primary transition-all duration-150 hover:-translate-y-0.5 hover:bg-primary hover:text-primary-foreground"
                          >
                            {tpl.text}
                          </button>
                        ))}
                      </div>
                    ))}
                  </div>

                  <Button type="submit" className="w-full rounded-none bg-primary py-6 text-base font-extrabold text-primary-foreground transition-transform duration-200 hover:-translate-y-1">
                    {home.hero.sendLabel}<ArrowRight className="ml-2" size={18} />
                  </Button>
                </div>
              </div>
            </motion.form>
          </div>
        </section>

        <section id="how-it-works" className="relative border-y-2 border-dashed border-border bg-muted px-5 py-20">
          <div className="mx-auto max-w-6xl">
            <div className="max-w-lg">
              <p className="font-heading text-2xl text-primary">No fancy occasion required.</p>
              <h2 className="mt-2 text-5xl font-bold leading-tight text-foreground">{home.steps.title}</h2>
            </div>
            <div className="relative mt-14 grid gap-8 md:grid-cols-3">
              <div className="pointer-events-none absolute left-[15%] right-[15%] top-10 hidden border-t-2 border-dashed border-secondary md:block" aria-hidden="true" />
              {home.steps.items.map((item, index) => (
                <article key={item.number} className={`relative border-2 border-foreground bg-card p-6 ${index === 1 ? 'shadow-[5px_6px_0_hsl(var(--accent))] md:translate-y-8 md:-rotate-2' : 'shadow-[5px_6px_0_hsl(var(--primary))]'} ${index === 2 ? 'md:rotate-2' : index === 0 ? 'md:-rotate-1' : ''}`}>
                  <span className="grid h-12 w-12 place-items-center rounded-full bg-secondary font-heading text-xl font-bold text-secondary-foreground">{item.number}</span>
                  <h3 className="mt-7 text-3xl font-bold text-foreground">{item.title}</h3>
                  <p className="mt-2 font-semibold leading-relaxed text-muted-foreground">{item.body}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="notes" className="px-5 py-24">
          <div className="mx-auto max-w-6xl">
            <p className="font-heading text-2xl text-secondary">{home.notes.eyebrow}</p>
            <h2 className="mt-2 text-5xl font-bold text-foreground">{home.notes.title}</h2>
            <div className="mt-12 grid gap-7 md:grid-cols-3">
              {home.notes.items.map((item, index) => (
                <motion.article whileHover={{ y: -4, rotate: index === 1 ? -1 : 1 }} key={item.label} className={`border-2 border-foreground p-7 ${item.color === 'coral' ? 'bg-primary text-primary-foreground' : item.color === 'yellow' ? 'bg-accent text-accent-foreground' : 'bg-secondary text-secondary-foreground'}`}>
                  <p className="text-sm font-extrabold">{item.label}</p>
                  <p className="mt-12 font-heading text-3xl font-bold leading-tight">{item.message}</p>
                  <div className="mt-12 border-t-2 border-dashed border-current pt-4 text-sm font-bold">Tap to make it yours <ArrowRight className="inline" size={16} /></div>
                </motion.article>
              ))}
            </div>
          </div>
        </section>

        <section className="px-5 pb-24">
          <div className="relative mx-auto max-w-6xl overflow-hidden border-2 border-foreground bg-secondary px-7 py-14 text-secondary-foreground shadow-[10px_10px_0_hsl(var(--accent))] md:px-14">
            <div className="pointer-events-none absolute -right-14 -top-20 h-64 w-64 rotate-45 border-[18px] border-primary" aria-hidden="true" />
            <div className="relative max-w-xl">
              <p className="font-heading text-3xl text-accent">One small note, ready to travel.</p>
              <h2 className="mt-3 text-5xl font-bold leading-tight">{home.cta.title}</h2>
              <p className="mt-4 text-lg font-semibold">{home.cta.body}</p>
              <a href="#send-hello" className="mt-8 inline-flex items-center gap-2 bg-accent px-6 py-4 font-extrabold text-accent-foreground transition-transform duration-200 hover:-translate-y-1">{home.cta.button}<ArrowRight size={18} /></a>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
