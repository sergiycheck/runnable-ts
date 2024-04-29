export const matchDomain = (url) => {
  const regexToMatchDomainWithHttpAnds =
    /(?:https?:\/\/)?(?:www.)?([A-Za-z0-9-]+(?:\.[A-Za-z]+)+)/gm;
  const matches = url.match(regexToMatchDomainWithHttpAnds);
  if (!matches && !matches.length) return [];

  const [replaced] = matches
    .map((match) => {
      return match.replace(/(https?:\/\/)?(www.)?/gm, '');
    })
    .map((match) => {
      return match.replace(/\.[A-Za-z]+/gm, '');
    });

  return replaced;
};
