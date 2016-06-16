package com.globalroam.gruc.enterprise.http;


import com.globalroam.gruc.enterprise.http.entity.GirlData;
//
//import retrofit2.Call;
//import retrofit2.http.GET;
//import retrofit2.http.Path;
import retrofit.Call;
import retrofit.http.GET;
import retrofit.http.Path;
import rx.Observable;

/**
 * Created by shang guangneng on 2016/6/16 0016.
 */

public interface ApiService {

    @GET("data/福利/10/{page}")
    Call<GirlData> getGrils(@Path("page") int page);

    @GET("data/福利/10/{page}")
    Observable<GirlData> getGrilsRx(@Path("page") int page);
}
