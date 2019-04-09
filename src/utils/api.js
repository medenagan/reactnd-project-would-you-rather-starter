import {
  _getUsers,
  _getQuestions,
  _saveQuestion,
  _saveQuestionAnswer,
  _saveUser
} from './_DATA.js'

export function getInitialData () {
  return Promise.all([
    _getUsers(),
    _getQuestions(),
  ]).then(([users, questions]) => ({
    users,
    questions,
  }))
}

export function saveQuestion (question) {
  return _saveQuestion(question)
}

export function saveQuestionAnswer ({ authedUser, qid, answer }) {
  return _saveQuestionAnswer({ authedUser, qid, answer })
}

export function saveUser({userid, name, avatar}) {
  return _saveUser({userid, name, avatar});
}

export function login(userid) {
  return (new Promise(resolve => setTimeout( () => resolve(userid), 800)));
}

export function logout() {
  return (new Promise(resolve => setTimeout( () => resolve(true), 800)));
}
