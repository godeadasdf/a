package com.a

import android.content.Context
import android.graphics.Canvas
import android.graphics.Color
import android.graphics.Paint
import android.util.AttributeSet
import android.view.LayoutInflater
import android.view.View
import android.widget.LinearLayout

/**
 * Created by kangning on 2017/8/18.
 */
class MyCustomView : LinearLayout {

    var mContext:Context? = null;
    val paint by lazy {
        Paint().apply {
            color = Color.GREEN;
        }
    }

    val inflater by lazy {
        LayoutInflater.from(mContext);
    }
    constructor(context: Context) : super(context) {
        mContext = context;
        init();
    }

    constructor(context: Context, atrrs: AttributeSet) : super(context, atrrs) {
        mContext = context;
    }

    fun init(){
        val initView = inflater.inflate(R.layout.form,null,false);
        initView.layoutParams = LayoutParams(LinearLayout.LayoutParams.MATCH_PARENT,LinearLayout.LayoutParams.MATCH_PARENT)
        addView(initView)
    }

    /*override fun onDraw(canvas: Canvas) {
        canvas.drawCircle(50f, 50f, 50f, Paint().apply { color = Color.BLACK;strokeWidth = 5f; });
    }*/

}