package com.a

import com.facebook.react.uimanager.SimpleViewManager
import com.facebook.react.uimanager.ThemedReactContext
import com.facebook.react.views.image.ReactImageView
import com.facebook.drawee.backends.pipeline.Fresco



/**
 * Created by kangning on 2017/8/18.
 */
 class ReactCustomViewManager: SimpleViewManager<MyCustomView>() {
    override fun createViewInstance(reactContext: ThemedReactContext): MyCustomView {
        return MyCustomView(reactContext)
    }

    companion object {
        private const val REACT_CLASS = "MyCustomView";
    }


    override fun getName(): String {
        return REACT_CLASS;
    }
}