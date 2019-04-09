export const collectionToArray = (collection) => Object.keys(collection).map(id => collection[id]);

export const setUserStats = (user) => {
  const countAsked = user.questions.length;
  const countAnswered = Object.keys(user.answers).length;
  const countAll = countAsked + countAnswered;
  return Object.assign({}, user, {countAsked, countAnswered, countAll});
}

export const setQuestionAuthedRelation = ({question, authedUser, users}) => {
  const hasAsked = question.author === authedUser;
  const hasAnswered = !!users[authedUser].answers[question.id];
  const userAuthor = users[question.author];
  return Object.assign({}, question, {hasAsked, hasAnswered, userAuthor, authedId: authedUser});
}
