package com.globalroam.gruc.enterprise.broadcast;

import android.content.BroadcastReceiver;
import android.content.Context;
import android.content.Intent;

import com.globalroam.gruc.enterprise.utils.Log;

/**
 * Created by shang guangneng on 2016/6/8 0008.
 */
public class MyBroadCast extends BroadcastReceiver {

    private String TAG="  MyBroadCast";
    public MyBroadCast(){

    }

    @Override
    public void onReceive(Context context, Intent intent) {
        if(intent!=null){
            Log.i(TAG,TAG+" onReceive  action is "+intent.getAction());
        }
    }
}
