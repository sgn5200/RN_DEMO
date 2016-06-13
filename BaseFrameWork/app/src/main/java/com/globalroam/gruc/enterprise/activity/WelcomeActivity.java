package com.globalroam.gruc.enterprise.activity;

import android.os.Bundle;
import android.os.Handler;

import com.globalroam.gruc.enterprise.R;
import com.globalroam.gruc.enterprise.baseui.BaseActivity;

public class WelcomeActivity extends BaseActivity {

    @Override
    public int getRootLayoutId() {
        return R.layout.activity_welcome;
    }

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);

        new Handler().postDelayed(new Runnable() {
            @Override
            public void run() {
                lunchActivity(LoginActivity.class);
            }
        },1000);
    }

    @Override
    protected void onResume() {
        super.onResume();
    }

    @Override
    public void initView() {

    }
}
