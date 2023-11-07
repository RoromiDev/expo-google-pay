package expo.modules.googlepay.activity

import android.os.Bundle
import androidx.appcompat.app.AppCompatActivity
import expo.modules.googlepay.databinding.ActivityCheckoutSuccessBinding

class CheckoutSuccessActivity : AppCompatActivity() {

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)

        val layout = ActivityCheckoutSuccessBinding.inflate(layoutInflater)
        setContentView(layout.root)
    }
}