package com.a

import android.view.View
import com.facebook.react.ReactPackage
import com.facebook.react.bridge.NativeModule
import com.facebook.react.bridge.ReactApplicationContext
import com.facebook.react.uimanager.ReactShadowNode
import com.facebook.react.uimanager.ViewManager
import java.util.*

/**
 * Created by kangning on 2017/8/18.
 */
class MyCustomViewPackage:ReactPackage {
    override fun createNativeModules(reactContext: ReactApplicationContext?): MutableList<NativeModule> {
        return Collections.emptyList();
    }

    override fun createViewManagers(reactContext: ReactApplicationContext?): MutableList<ReactCustomViewManager> {
        return mutableListOf(ReactCustomViewManager());
    }
}