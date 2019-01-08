package com.cuhacking;

import com.facebook.react.ReactActivity;

// React native splash screen imports
import org.devio.rn.splashscreen.SplashScreen;
import android.os.Bundle;

// React Native gesture handler imports
import com.facebook.react.ReactActivityDelegate;
import com.facebook.react.ReactRootView;
import com.swmansion.gesturehandler.react.RNGestureHandlerEnabledRootView;

public class MainActivity extends ReactActivity {

    // From react native splash screen
    @Override
    protected void onCreate(Bundle savedInstanceState)
    {
        SplashScreen.show(this, R.style.SplashScreenTheme);
        super.onCreate(savedInstanceState);
    }

    // From react native gesture handler
    @Override
    protected ReactActivityDelegate createReactActivityDelegate() {
      return new ReactActivityDelegate(this, getMainComponentName()) {
        @Override
        protected ReactRootView createRootView() {
         return new RNGestureHandlerEnabledRootView(MainActivity.this);
        }
      };
    }
    
    /**
     * Returns the name of the main component registered from JavaScript.
     * This is used to schedule rendering of the component.
     */
    @Override
    protected String getMainComponentName() {
        return "cuHacking";
    }
}
