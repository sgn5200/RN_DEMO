package com.globalroam.gruc.enterprise.activity.presenter.login;

/**
 * Created by shang guangneng on 2016/6/8 0008.
 */
public class LoginImp{

    public void doLogin(String username, String userpassword,LoginFab fab) {
        if(!"username".equals(username)){
            fab.loginUserNameError();
        }
        if(!"password".equals(userpassword)){
            fab.loginPasswordError();
        }

        fab.loginSuccess();

    }


    public void doLogout() {

    }
}
