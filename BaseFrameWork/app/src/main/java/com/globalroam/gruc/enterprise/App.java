package com.globalroam.gruc.enterprise;

import android.app.Application;

/**
 * Created by shang guangneng on 2016/6/8 0008.
 */
public class App extends Application {
    private String TAG="GRUCApplication";
    private static App instance;
    public static App getInstance(){
        return instance;
    }

    @Override
    public void onCreate() {
        super.onCreate();
        instance=this;
    }
}
