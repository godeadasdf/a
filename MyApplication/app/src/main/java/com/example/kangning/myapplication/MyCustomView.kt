package com.example.kangning.myapplication

import android.content.Context
import android.graphics.Canvas
import android.graphics.Color
import android.graphics.Paint
import android.util.AttributeSet
import android.view.View

/**
 * Created by kangning on 2017/8/18.
 */
class MyCustomView : View {

    val paint by lazy {
        Paint().apply {
            color = Color.GREEN;
        }
    }

    constructor(context: Context) : super(context) {

    }

    constructor(context: Context, atrrs: AttributeSet) : super(context, atrrs) {

    }

    override fun onDraw(canvas: Canvas) {
        canvas.drawCircle(50f, 50f, 50f, Paint().apply { color = Color.BLACK;strokeWidth = 5f; });
    }

}