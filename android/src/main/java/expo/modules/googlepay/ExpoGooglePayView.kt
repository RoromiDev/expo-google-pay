package expo.modules.googlepay

import android.content.Context
import android.os.Bundle
import android.view.View
import android.view.LayoutInflater
import android.widget.Button
import com.google.android.gms.common.api.ApiException
import expo.modules.core.ViewManager
import expo.modules.kotlin.views.ExpoView
import expo.modules.kotlin.AppContext
import expo.modules.googlepay.databinding.ActivityCheckoutBinding
import expo.modules.googlepay.util.PaymentsUtil
import expo.modules.googlepay.activity.CheckoutActivity
import expo.modules.googlepay.R
import expo.modules.googlepay.util.Json
import android.util.Log
import android.widget.Toast
import org.json.JSONArray
import org.json.JSONException
import org.json.JSONObject
import android.text.Html
import android.app.Activity
import android.content.ContextWrapper
import android.content.Intent
import com.google.android.gms.wallet.button.ButtonOptions
import com.google.android.gms.wallet.button.PayButton
import com.google.android.gms.wallet.PaymentData

class ExpoGooglePayView(context: Context, appContext: AppContext) : ExpoView(context, appContext) {
    init {
        val intent = Intent(context, CheckoutActivity::class.java).apply {}
        context.startActivity(intent)
    }
}
