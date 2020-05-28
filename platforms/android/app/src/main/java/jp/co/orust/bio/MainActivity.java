package jp.co.orust.bio;

import android.os.Bundle;
import org.apache.cordova.*;
import android.view.Menu;
import android.view.MenuItem;
import android.webkit.WebView;

public class MainActivity extends CordovaActivity
{
  @Override
public void onCreate(Bundle savedInstanceState) {
super.onCreate(savedInstanceState);
super.init();
// Set by <content src="index.html" /> in config.xml
loadUrl(launchUrl);

    }
}
