import { GithubUsers } from "../models/models";

const User1: GithubUsers = {
    "login": "gaearon",
      "id": 810438,
      "avatar_url": "https://avatars.githubusercontent.com/u/810438?v=4",
      "url": "https://api.github.com/users/gaearon",
      "html_url": "https://github.com/gaearon",
      "followers_url": "https://api.github.com/users/gaearon/followers",
      "following_url": "https://api.github.com/users/gaearon/following{/other_user}",
      "gists_url": "https://api.github.com/users/gaearon/gists{/gist_id}",
      "starred_url": "https://api.github.com/users/gaearon/starred{/owner}{/repo}",
      "subscriptions_url": "https://api.github.com/users/gaearon/subscriptions",
      "organizations_url": "https://api.github.com/users/gaearon/orgs",
      "repos_url": "https://api.github.com/users/gaearon/repos",
      "events_url": "https://api.github.com/users/gaearon/events{/privacy}",
      "received_events_url": "https://api.github.com/users/gaearon/received_events",
      "type": "User",
      "site_admin": false,
      "score": 1.0
};

const User2: GithubUsers = {
    "login": "michaelliao",
      "id": 470058,
      "avatar_url": "https://avatars.githubusercontent.com/u/470058?v=4",
      "url": "https://api.github.com/users/michaelliao",
      "html_url": "https://github.com/michaelliao",
      "followers_url": "https://api.github.com/users/michaelliao/followers",
      "following_url": "https://api.github.com/users/michaelliao/following{/other_user}",
      "gists_url": "https://api.github.com/users/michaelliao/gists{/gist_id}",
      "starred_url": "https://api.github.com/users/michaelliao/starred{/owner}{/repo}",
      "subscriptions_url": "https://api.github.com/users/michaelliao/subscriptions",
      "organizations_url": "https://api.github.com/users/michaelliao/orgs",
      "repos_url": "https://api.github.com/users/michaelliao/repos",
      "events_url": "https://api.github.com/users/michaelliao/events{/privacy}",
      "received_events_url": "https://api.github.com/users/michaelliao/received_events",
      "type": "User",
      "site_admin": false,
      "score": 1.0
};


const User3: GithubUsers = {
    "login": "karpathy",
      "id": 241138,
      "avatar_url": "https://avatars.githubusercontent.com/u/241138?v=4",
      "url": "https://api.github.com/users/karpathy",
      "html_url": "https://github.com/karpathy",
      "followers_url": "https://api.github.com/users/karpathy/followers",
      "following_url": "https://api.github.com/users/karpathy/following{/other_user}",
      "gists_url": "https://api.github.com/users/karpathy/gists{/gist_id}",
      "starred_url": "https://api.github.com/users/karpathy/starred{/owner}{/repo}",
      "subscriptions_url": "https://api.github.com/users/karpathy/subscriptions",
      "organizations_url": "https://api.github.com/users/karpathy/orgs",
      "repos_url": "https://api.github.com/users/karpathy/repos",
      "events_url": "https://api.github.com/users/karpathy/events{/privacy}",
      "received_events_url": "https://api.github.com/users/karpathy/received_events",
      "type": "User",
      "site_admin": false,
      "score": 1.0
};

const mockUsers: GithubUsers[] = [User1, User2, User3];

export {User1, User2, User3, mockUsers }