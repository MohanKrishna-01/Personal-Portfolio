import { useQuery } from "@tanstack/react-query";
import { Github, GitFork, Star, BookMarked, Users } from "lucide-react";
import { motion } from "framer-motion";
import AnimatedCounter from "@/components/AnimatedCounter";
import { Skeleton } from "@/components/ui/skeleton";
import { GITHUB_USERNAME } from "@/data/portfolio";

interface Repo {
  stargazers_count: number;
  forks_count: number;
  language: string | null;
}

const fetchGithub = async () => {
  const [userRes, reposRes] = await Promise.all([
    fetch(`https://api.github.com/users/${GITHUB_USERNAME}`),
    fetch(`https://api.github.com/users/${GITHUB_USERNAME}/repos?per_page=100&sort=updated`),
  ]);
  if (!userRes.ok || !reposRes.ok) throw new Error("GitHub API unavailable");
  const user = await userRes.json();
  const repos: Repo[] = await reposRes.json();
  const languages = Array.from(
    new Set(repos.map((r) => r.language).filter((l): l is string => Boolean(l))),
  ).slice(0, 6);

  return {
    repos: user.public_repos as number,
    followers: user.followers as number,
    stars: repos.reduce((sum, r) => sum + r.stargazers_count, 0),
    forks: repos.reduce((sum, r) => sum + r.forks_count, 0),
    languages,
  };
};

const GithubStats = () => {
  const { data, isLoading, isError } = useQuery({
    queryKey: ["github", GITHUB_USERNAME],
    queryFn: fetchGithub,
    staleTime: 1000 * 60 * 30,
    retry: 1,
  });

  const stats = [
    { icon: BookMarked, label: "Public repositories", value: data?.repos ?? 0 },
    { icon: Star, label: "Stars earned", value: data?.stars ?? 0 },
    { icon: GitFork, label: "Forks", value: data?.forks ?? 0 },
    { icon: Users, label: "Followers", value: data?.followers ?? 0 },
  ];

  return (
    <section id="github" className="relative py-24">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className="mx-auto max-w-5xl"
        >
          <div className="mb-12 text-center">
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-primary">Live from GitHub</p>
            <h2 className="accent-underline text-3xl font-bold sm:text-4xl">Open source activity</h2>
          </div>

          <div className="glass-card rounded-3xl p-6 sm:p-10">
            {isError ? (
              <p className="text-center text-sm text-muted-foreground">
                Live stats are temporarily unavailable.{" "}
                <a
                  className="text-primary underline underline-offset-4"
                  href={`https://github.com/${GITHUB_USERNAME}`}
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  View the GitHub profile
                </a>
                .
              </p>
            ) : (
              <>
                <div className="grid grid-cols-2 gap-4 sm:gap-8 lg:grid-cols-4">
                  {stats.map((stat) => (
                    <div key={stat.label} className="rounded-2xl border border-border/60 bg-background/40 p-6 text-center">
                      <stat.icon className="mx-auto mb-3 h-5 w-5 text-primary" aria-hidden="true" />
                      <div className="text-3xl font-bold tracking-tight text-foreground">
                        {isLoading ? (
                          <Skeleton className="mx-auto h-8 w-14" />
                        ) : (
                          <AnimatedCounter value={stat.value} />
                        )}
                      </div>
                      <p className="mt-2 text-xs text-muted-foreground">{stat.label}</p>
                    </div>
                  ))}
                </div>

                {data?.languages.length ? (
                  <div className="mt-8 flex flex-wrap items-center justify-center gap-2">
                    {data.languages.map((lang) => (
                      <span
                        key={lang}
                        className="rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-xs font-medium text-primary"
                      >
                        {lang}
                      </span>
                    ))}
                  </div>
                ) : null}

                <div className="mt-8 text-center">
                  <a
                    className="inline-flex min-h-11 items-center gap-2 rounded-full border border-border px-5 text-sm font-medium text-foreground transition-smooth hover:border-primary/60 hover:text-primary"
                    href={`https://github.com/${GITHUB_USERNAME}`}
                    target="_blank"
                    rel="noreferrer noopener"
                  >
                    <Github className="h-4 w-4" aria-hidden="true" />
                    @{GITHUB_USERNAME}
                  </a>
                </div>
              </>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default GithubStats;