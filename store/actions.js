import Vue from 'vue'
import VueResource from 'vue-resource'

// import _ from 'underscore'
Vue.use(VueResource)
import toastr from 'toastr'
import _ from 'underscore'

var api_user_info = Vue.resource('/api_user_info{/parm}')
var api_signup = Vue.resource('/api_signup{/parm}')
var api_login = Vue.resource('/api_login{/parm}')
var api_forget = Vue.resource('/api_forget{/parm}')

export const setLocation = ({ dispatch }) => dispatch('SET_LOCATION')
export const queryUserInfo = ({ dispatch, state }, call_bak = null) => {
  if (state.user_info.user_name !== '') {
    console.log('had user_info')
    return
  }
  api_user_info.get().then(
    function (response) {
      if (response.data.error !== '0') {
        if (response.data.error === '没有登录') {
          console.log(response.data.error)
          return
        }
        toastr.error(response.data.error)
        return
        // throw new Error(response.data.error)
      }
      if (call_bak) {
        call_bak(_.clone(response.data.user_info))
      }
      dispatch('SET_USER_INFO', response.data.user_info)
    },
    function (response) {
    }
  )
}
export const login = ({ dispatch, state, actions }, parm, call_back = null) => {
  api_login.save(parm).then(
    function (response) {
      if (response.data.error !== '0') {
        toastr.error(response.data.error)
        return
        // throw new Error(response.data.error)
      }
      if (call_back) {
        queryUserInfo({ dispatch, state, actions })
        call_back()
      }
    },
    function (response) {
    }
  )
}
export const updateOrInsertUser = ({ dispatch, state, actions }, user) => {
  api_user_info.update(user).then(
    function (response) {
      console.log(response.data)
      if (response.data.error !== '0') {
        toastr.error(response.data.error)
      } else {
        toastr.info('成功')
      }
    },
    function (response) {
    }
  )
}
export const forget = ({ dispatch, state, actions }, email) => {
  api_forget.save(email).then(
    function (response) {
      if (response.data.error !== '0') {
        toastr.error(response.data.error)
      }
      toastr.message('请登录你的邮箱，继续找回密码')
    },
    function (response) {
    }
  )
}
export const signup = ({ dispatch, state, actions }, parm, call_back = null) => {
  api_signup.save(parm).then(
    function (response) {
      if (response.data.error !== '0') {
        toastr.error(response.data.error)
        // throw new Error(response.data.error)
        return
      }
      if (call_back) {
        actions.queryUserInfo()
        call_back()
      }
    },
    function (response) {
    }
  )
}
