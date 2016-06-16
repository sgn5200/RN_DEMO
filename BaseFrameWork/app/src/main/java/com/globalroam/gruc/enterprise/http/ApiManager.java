package com.globalroam.gruc.enterprise.http;

import com.globalroam.gruc.enterprise.http.entity.GirlData;
import com.squareup.okhttp.OkHttpClient;

import java.util.concurrent.TimeUnit;

import retrofit.GsonConverterFactory;
import retrofit.Retrofit;
import retrofit.RxJavaCallAdapterFactory;
import rx.Observable;

/**
 * Created by shang guangneng on 2016/6/16 0016.
 */

public class ApiManager implements ApiRepository {

    private final String TAG = getClass().getSimpleName();

    private static final String BASE_URL = "http://gank.io/api/";

    private final int DEFAULT_TIMEOUT = 10;

    private ApiService apiService;

    private ApiManager() {

        OkHttpClient client=new OkHttpClient();
        client.setConnectTimeout(DEFAULT_TIMEOUT,TimeUnit.SECONDS);

        Retrofit retrofit = new Retrofit.Builder()
                .baseUrl(BASE_URL)
                .client(client)
                .addConverterFactory(GsonConverterFactory.create())
                .addCallAdapterFactory(RxJavaCallAdapterFactory.create())
                .build();
        apiService=retrofit.create(ApiService.class);
    }

    private static class Create {
        private static final ApiManager apiManager = new ApiManager();
    }

    public static ApiManager getInstance() {
        return Create.apiManager;
    }

    @Override
    public Observable<GirlData> getGirlData(int page) {
        return apiService.getGrilsRx(page);
    }
}
