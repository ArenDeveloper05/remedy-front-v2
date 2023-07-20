export function inflect(count, words) {
  if (count === 1) {
    return `${count} ${words[0]}`;
  }
  return `${count} ${words[1]}`;
}

export function formatDate(timestamp) {
  return new Date(timestamp).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
}

export function formatSum(sum) {
  return sum.toLocaleString('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  });
}

export function parseLocationPathname(pathname){
  return pathname.replace(/^\/?/, '').split('/');
}

export function parseLocationSearch(locationSearch){
  if (locationSearch === '') {
    return {}
  }

  const params = new URLSearchParams(locationSearch);
  const entries = Array.from(params.entries());

  return Object.fromEntries(entries.map(([key, value]) => {
    if (value === 'true' || value === 'false') {
      return [key, value === 'true'];
    }
    else if (!isNaN(value)) {
      return [key, parseInt(value, 10)];
    }
    else {
      return [key, value];
    }
  }));
}


export function getScrollbarWidth() {
  const scrollableElement = document.createElement('div');
  scrollableElement.style.width = '100px';
  scrollableElement.style.height = '100px';
  scrollableElement.style.overflow = 'scroll';
  scrollableElement.style.position = 'absolute';
  scrollableElement.style.top = '-9999px';
  document.body.appendChild(scrollableElement);

  const scrollbarWidth = scrollableElement.offsetWidth - scrollableElement.clientWidth;

  document.body.removeChild(scrollableElement);
  return scrollbarWidth;
}


export function setRootCSSVariable(key, value) {
  document.documentElement.style.setProperty(key, value);
}


export function fetchGraphQL(query, variables, isTransformedQuery) {
  query = isTransformedQuery
    ? query.params.text
    : query;

  return fetch('https://api.github.com/graphql', {
    method: 'POST',
    headers: {
      Authorization: `bearer ${process.env.REACT_APP_GITHUB_AUTH_TOKEN}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ query, variables }),
  })
    .then((res) => res.json())
    .then(json => {
      console.warn('__json.data', json, query);
      // return json.data;
      return json;
    });
}


export function graphql(queryParts, ...variables){
  let str = '';
  for (let i = 0; i < queryParts.length; i ++) {
    str += queryParts[i] + (variables[i] || '');
  }
  return str;
}
