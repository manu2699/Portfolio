const GITHUB_API_URL = "https://api.github.com";
const GITHUB_USER = "manu2699"; // Your GitHub username
const GITHUB_TOKEN = import.meta.env.GITHUB_TOKEN;

export interface GithubRepo {
  name: string;
  pushed_at: string;
  // Add other properties here if you need them in the future
}

let allRepos: Map<string, GithubRepo> | null = null;

/**
 * Fetches all public repositories for the specified user and caches the result.
 * @returns A Map where keys are repository names and values are repository data.
 */
export async function getGithubRepos(): Promise<Map<string, GithubRepo>> {
  if (allRepos) {
    return allRepos;
  }

  try {
    const response = await fetch(`${GITHUB_API_URL}/users/${GITHUB_USER}/repos?sort=pushed&per_page=100`, {
      headers: {
        Authorization: `Bearer ${GITHUB_TOKEN}`,
        "X-GitHub-Api-Version": "2022-11-28",
        Accept: "application/vnd.github+json",
      },
    });

    if (!response.ok) throw new Error(`Failed to fetch repos: ${response.statusText}`);

    const data: GithubRepo[] = await response.json();
    allRepos = new Map(data.map((repo) => [repo.name, repo]));
    return allRepos;
  } catch (error) {
    console.error("Error fetching GitHub repositories:", error);
    return new Map();
  }
}