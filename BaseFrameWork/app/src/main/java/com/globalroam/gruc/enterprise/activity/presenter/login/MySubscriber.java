package com.globalroam.gruc.enterprise.activity.presenter.login;

import rx.Subscriber;

/**
 * Created by shang guangneng on 2016/6/16 0016.
 */

public abstract class MySubscriber<T> extends Subscriber<T> {

    @Override
    public void onStart() {
        super.onStart();
    }

    @Override
    public void onNext(T t) {

    }

    @Override
    public void onCompleted() {

    }

    @Override
    public void onError(Throwable e) {

    }

}
