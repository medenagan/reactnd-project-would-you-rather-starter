export const usersToArray = (users) => Object.keys(users).map(id => users[id]);

export const setUserStats = (user) => {
  const countAsked = user.questions.length;
  const yayayay = user.answers
  const countAnswered = Object.keys(user.answers).length;
  const countAll = countAsked + countAnswered;
  return Object.assign({}, user, {countAsked, countAnswered, countAll, yayayay});
}
