export interface GitResponse {
    total_count: number
    incomplete_results: boolean
    items: GithubUsers[]
  }

export interface GithubUsers {
  login: string;
  id: number;
  avatar_url: string;
  url: string;
  html_url: string;
  followers_url: string;
  following_url: string;
  gists_url: string;
  starred_url: string;
  subscriptions_url: string;
  organizations_url: string;
  repos_url: string;
  events_url: string;
  received_events_url: string;
  type: string;
  site_admin: boolean;
  score: number;
}


export interface APIResponse {
    message: string;
    statusCode: number;
    data?: any;
  }


  export interface Search {
    search: string;
  }
