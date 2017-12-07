export default function(type, payload) {
  if (typeof payload === 'undefined') {
    return { type };
  }

  return { type, payload };
};
