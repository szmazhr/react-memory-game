import React from 'react';
import { Favorite, GitHub } from '@mui/icons-material';
import PropTypes from 'prop-types';

function destructureGithubRepoLink(repoLink) {
  const [, owner, repo] = repoLink.match(
    /^(?:https?:\/\/)?(?:www\.)?github\.com\/(.*)\/(.*)$/
  );
  return { owner, repo };
}

function Footer({ name, repoLink }) {
  const { owner } = destructureGithubRepoLink(repoLink);
  return (
    <footer className="footer">
      <div className="repo_link">
        <a href={repoLink} target="_blank" rel="noreferrer">
          <GitHub />
        </a>
      </div>
      <div className="profile-link">
        <span>
          Made with <Favorite color="error" fontSize="small" /> by
          <a
            href={`https://github.com/${owner}`}
            target="_blank"
            rel="noreferrer"
          >
            {` ${name}`}
          </a>
        </span>
      </div>
      <div>
        <span>
          Flags Icon by{' '}
          <a href="https://github.com/lipis" target="_blank" rel="noreferrer">
            Lipis
          </a>
        </span>
      </div>
    </footer>
  );
}

Footer.propTypes = {
  name: PropTypes.string.isRequired,
  repoLink: PropTypes.string.isRequired,
};

export default Footer;
