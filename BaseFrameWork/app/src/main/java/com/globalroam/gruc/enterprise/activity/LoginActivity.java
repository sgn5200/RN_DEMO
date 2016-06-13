package com.globalroam.gruc.enterprise.activity;

import android.os.Bundle;
import android.view.View;
import android.widget.Button;

import com.globalroam.gruc.enterprise.R;
import com.globalroam.gruc.enterprise.activity.presenter.login.LoginPresenter;
import com.globalroam.gruc.enterprise.activity.presenter.login.LoginFab;
import com.globalroam.gruc.enterprise.baseui.BaseActivity;

public class LoginActivity extends BaseActivity implements LoginFab, View.OnClickListener {

    Button bt0, bt1, bt2, bt3;
    LoginPresenter loginControl;

    @Override
    public int getRootLayoutId() {
        return R.layout.activity_login;
    }

    @Override
    public void initView() {
        bt0 = bind(R.id.bt0);
        bt1 = bind(R.id.bt1);
        bt2 = bind(R.id.bt2);
        bt3 = bind(R.id.bt3);
    }


    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        initListener(this, bt0, bt1, bt2, bt3);
    }

    @Override
    public void loginSuccess() {
        showToast("登陆成功");
        lunchActivity(MainActivity.class);
    }

    @Override
    public void loginUserNameError() {
        showToast("用户名错误");

    }

    @Override
    public void loginPasswordError() {
        showToast("密码错误");
    }

    @Override
    public void onClick(View v) {
        switch (v.getId()) {
            case R.id.bt0:
                showToast("click bt0");
                break;
            case R.id.bt1:
                showToast("click bt1");
                break;
            case R.id.bt2:
                showToast("click bt2");
                break;
            case R.id.bt3:
                showToast("click bt3");

                loginControl=new LoginPresenter(this);
                loginControl.login("username","password");
                break;
        }
    }
}
