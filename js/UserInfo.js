class UserInfo {
  constructor(userInfoName, userInfoJob) {
    this.userInfoName = userInfoName;
    this.userInfoJob = userInfoJob;
    this.name = userInfoName.textContent
    this.job = userInfoJob.textContent
  }

  setUserInfo(name, job) {
    this.name = name
    this.job = job
  }

  updateUserInfo () {
    this.userInfoName.textContent = this.name
    this.userInfoJob.textContent = this.job
  }

  updateUserInfoFromServer(result) {
    this.userInfoName.textContent = result.name
    this.userInfoJob.textContent = result.about
  }
}