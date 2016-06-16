package com.globalroam.gruc.enterprise.activity.presenter.login;

import com.globalroam.gruc.enterprise.http.ApiManager;
import com.globalroam.gruc.enterprise.http.entity.Girl;
import com.globalroam.gruc.enterprise.http.entity.GirlData;
import com.globalroam.gruc.enterprise.utils.Log;

import rx.android.schedulers.AndroidSchedulers;
import rx.schedulers.Schedulers;

/**
 * Created by shang guangneng on 2016/6/8 0008.
 */

public class LoginPresenter {

    private LoginImp loginImp;
    private LoginFab loginFab;
    private MySubscriber<GirlData> mySubscriber;

    private String TAG = getClass().getSimpleName();

    public LoginPresenter(LoginFab fab) {
        loginFab = fab;
        loginImp = new LoginImp();
        mySubscriber = new MySubscriber<GirlData>() {
            @Override
            public void onStart() {
                super.onStart();
            }

            @Override
            public void onNext(GirlData girlData) {
                super.onNext(girlData);

                for(Girl girl:girlData.getGirls()){
                    Log.i(TAG,girl.toString());
                }

                fab.loginSuccess();
            }

            @Override
            public void onError(Throwable e) {
                super.onError(e);
                fab.loginPasswordError();
                fab.loginUserNameError();
            }

            @Override
            public void onCompleted() {
                super.onCompleted();
            }
        };
    }

    public void login(String userName, String password) {
        loginImp.doLogin(userName, password, loginFab);
    }

    public void testApi(int page) {
        ApiManager.getInstance()
                .getGirlData(page)
                .subscribeOn(Schedulers.io())
                .observeOn(AndroidSchedulers.mainThread())
                .subscribe(mySubscriber);
    }
}
