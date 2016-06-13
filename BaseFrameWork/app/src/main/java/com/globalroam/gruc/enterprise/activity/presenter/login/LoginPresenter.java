package com.globalroam.gruc.enterprise.activity.presenter.login;

/**
 * Created by shang guangneng on 2016/6/8 0008.
 */
public class LoginPresenter {

    private LoginImp loginImp;
    private LoginFab loginFab;
    public LoginPresenter(LoginFab fab){
        loginFab=fab;
        loginImp=new LoginImp();
    };

    public void login(String userName,String password){
        loginImp.doLogin(userName,password,loginFab);
    }


}
