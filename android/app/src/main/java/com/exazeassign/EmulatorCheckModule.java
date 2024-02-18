// EmulatorCheckModule.java
package com.exazeassign;

import android.os.Build;

import androidx.annotation.NonNull;

import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;
import com.facebook.react.bridge.Callback;

public class EmulatorCheckModule extends ReactContextBaseJavaModule {
    EmulatorCheckModule(ReactApplicationContext context) {
        super(context);
    }

    @NonNull
    @Override
    public String getName() {
        return "EmulatorCheckModule";
    }

    @ReactMethod
    public void isEmulator(Callback callback) {
        boolean isEmulator = Build.FINGERPRINT.startsWith("google/sdk_gphone_")
                || Build.FINGERPRINT.startsWith("generic")
                || Build.MODEL.contains("Emulator")
                || Build.PRODUCT.contains("google_sdk")
                || Build.MANUFACTURER.contains("Genymotion")
                || Build.MODEL.contains("Android SDK built for x86");
        callback.invoke(null, isEmulator);
    }
}
