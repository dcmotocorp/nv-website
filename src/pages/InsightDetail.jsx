import { Link, useParams } from 'react-router-dom';
import Icon from '../components/Icon';
import { Breadcrumb, CtaBand, Prose, Avatar, Pill } from '../components/ui';
import { InsightCard } from '../components/cards';
import Carousel from '../components/Carousel';
import { insights, insightBySlug, formatDate } from '../data/insights';
import NotFound from './NotFound';

const asset = (p) => `${import.meta.env.BASE_URL}${p}`;

export default function InsightDetail() {
  const { slug } = useParams();
  const article = insightBySlug(slug);

  if (!article) return <NotFound />;

  const more = insights.filter((a) => a.slug !== article.slug);
  const initials = article.author
    .split(' ')
    .filter((w) => w[0] === w[0].toUpperCase() && w.length > 1)
    .slice(-2)
    .map((w) => w[0])
    .join('');

  return (
    <>
      {/* ---------- hero ---------------------------------------------- */}
      <section className="banner">
        <div className="banner__media">
          <img src={asset(`img/insights/${article.slug}.jpg`)} alt="" fetchpriority="high" />
        </div>
        <div className="shell" style={{ paddingTop: 36, paddingBottom: 72 }}>
          <Breadcrumb
            trail={[
              { label: 'Home', to: '/' },
              { label: 'Insights', to: '/insights' },
              { label: article.topic },
            ]}
          />
          <div className="stack" style={{ gap: 22, marginTop: 36, maxWidth: '62ch' }}>
            <Pill>{article.topic}</Pill>
            <h1 className="display" style={{ fontSize: 'clamp(32px, 4.4vw, 50px)' }}>
              {article.title}
            </h1>
            <p className="lede" style={{ fontSize: 19.5 }}>
              {article.deck}
            </p>
            <div
              className="row"
              style={{ gap: 14, marginTop: 10, paddingTop: 22, borderTop: '1px solid rgba(247,244,239,0.18)' }}
            >
              <Avatar initials={initials} size={42} />
              <div className="stack" style={{ gap: 2 }}>
                <span style={{ fontSize: 15, fontWeight: 600 }}>{article.author}</span>
                <span style={{ fontSize: 13, color: 'var(--on-dark-3)' }}>{article.role}</span>
              </div>
              <div
                className="stack"
                style={{ gap: 2, marginLeft: 'auto', textAlign: 'right' }}
              >
                <span style={{ fontSize: 13, color: 'var(--on-dark-2)' }}>{formatDate(article.date)}</span>
                <span className="mono">{article.readingTime}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ---------- body ---------------------------------------------- */}
      <section className="section">
        <div className="shell">
          <div className="split">
            <article style={{ maxWidth: '68ch' }}>
              <Prose blocks={article.body} />

              <div
                className="card stack"
                style={{
                  gap: 14,
                  marginTop: 52,
                  background: 'var(--cream)',
                  borderColor: 'var(--clay-line)',
                }}
              >
                <span className="eyebrow">Want to argue with this?</span>
                <p className="body">
                  We would genuinely like that. If your experience contradicts any of the above, write
                  to us — several of these articles have been revised after a client disagreed.
                </p>
                <Link to="/contact" className="btn btn--primary btn--sm" style={{ width: 'fit-content' }}>
                  Get in touch
                  <Icon name="arrowRight" size={15} strokeWidth={2} />
                </Link>
              </div>
            </article>

            <aside className="stack" style={{ gap: 20, position: 'sticky', top: 100 }}>
              <div className="card stack" style={{ gap: 14 }}>
                <span className="eyebrow">In this article</span>
                <nav className="stack" style={{ gap: 9 }}>
                  {article.body
                    .filter((b) => b.h)
                    .map((b) => (
                      <span key={b.h} style={{ fontSize: 14, lineHeight: 1.45, color: 'var(--ink-3)' }}>
                        {b.h}
                      </span>
                    ))}
                </nav>
              </div>
              <div className="card stack" style={{ gap: 12 }}>
                <span className="eyebrow">About the author</span>
                <div className="row" style={{ gap: 12 }}>
                  <Avatar initials={initials} size={40} />
                  <div className="stack" style={{ gap: 1 }}>
                    <span style={{ fontSize: 14.5, fontWeight: 600 }}>{article.author}</span>
                    <span style={{ fontSize: 12.5, color: 'var(--ink-4)' }}>{article.role}</span>
                  </div>
                </div>
                <Link to="/about" className="small" style={{ color: 'var(--clay)' }}>
                  Meet the team
                </Link>
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* ---------- more ---------------------------------------------- */}
      <section className="section section--line-top" style={{ background: 'var(--surface)' }}>
        <div className="shell">
          <Carousel
            eyebrow="Keep reading"
            title="More notes from engagements."
            seeAll={{ to: '/insights', label: 'See all 6 articles' }}
            interval={6500}
            ariaLabel="More articles"
          >
            {more.map((a) => (
              <InsightCard key={a.slug} article={a} />
            ))}
          </Carousel>
        </div>
      </section>

      <CtaBand secondary={{ to: '/insights', label: 'Back to insights' }} />
    </>
  );
}
