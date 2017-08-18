package com.a

import android.widget.Toast
import com.facebook.react.bridge.ReactApplicationContext
import com.facebook.react.bridge.ReactContextBaseJavaModule
import com.facebook.react.bridge.ReactMethod
import java.util.*

/**
 * Created by kangning on 2017/8/18.
 */
class ToastModule : ReactContextBaseJavaModule {

    companion object {
        private const val DURATION_SHORT_KEY = "SHORT";
        private const val DURATION_LONG_KEY = "LONG";
    }

    constructor(reactContext: ReactApplicationContext) : super(reactContext) {

    }

    override fun getName(): String = ("ToastAndroid");

    override fun getConstants(): MutableMap<String, Any> {
        val constants: MutableMap<String, Any> = HashMap();
        constants.put(DURATION_SHORT_KEY, Toast.LENGTH_SHORT);
        constants.put(DURATION_LONG_KEY, Toast.LENGTH_LONG);
        return constants;
    }

    @ReactMethod
    fun show(message: String?, duration: Int) {
        Toast.makeText(reactApplicationContext, message + "by kang", duration).show();
    }


    override fun canOverrideExistingModule() = true;

}