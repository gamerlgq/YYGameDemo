package com.yyGame.lib;

import android.app.Activity;
import android.app.Dialog;
import android.content.Context;
import android.content.Intent;
import android.graphics.drawable.ColorDrawable;
import android.graphics.drawable.Drawable;
import android.net.Uri;
import android.net.wifi.WifiInfo;
import android.net.wifi.WifiManager;
import android.os.Build;
import android.os.Vibrator;
import android.view.ViewGroup;
import android.view.Window;
import android.widget.ProgressBar;
import android.widget.RelativeLayout;

import com.cocos.lib.CocosHelper;

import org.json.JSONArray;
import org.json.JSONException;

import java.util.Vector;


public class PSNative {
	static Activity mContext = null;
	static Vibrator mVibrator = null;

	static PSDialog mCreatingDialog = null;
	static PSDialog mShowingDialog = null;
	static ProgressBar mProgressBar = null;
	static Dialog mIndicatorDialog = null;
	static Vector<PSDialog> mShowingDialogs = null;

	static Drawable mAppIcon = null;

	static String GUID_STORE_KEY = "guid";

	static PSDialog.PSDialogListener mPSDialogListener = new PSDialog.PSDialogListener() {
		@Override
		public void onDismiss(PSDialog dialog) {
			showPreAlert();
		}
	};

	public static void init(Activity context) {
		mContext = context;
		mVibrator = (Vibrator) context
				.getSystemService(Context.VIBRATOR_SERVICE);

		mShowingDialogs = new Vector<PSDialog>();
	}

	public static void setAppIcon(Drawable icon) {
		// 当对话框需要带上图像时，调用该方法。null表示不带图像
		mAppIcon = icon;
	}

//	修改 final Vector<String> buttonTitles 为 final String buttonTitles，传入json解析，Vector传进来会变空
	public static void createAlert(final String title, final String message,
			final String buttonTitles, final String listener, final int nTheme) {
		if (mContext == null) {
			return;
		}
		
		Vector<String> tempVector= new Vector<String>();
		try {  
			JSONArray arrayJson = new JSONArray(buttonTitles);                 
            for(int i=0;i<arrayJson.length();i++) { 
            	String aa = arrayJson.getString(i);
            	tempVector.add(arrayJson.getString(i));
            }  
      } catch (JSONException e) {  
           System.out.println("Something wrong...");  
            e.printStackTrace();  
        } 
		
		final Vector<String> buttonTitlesVector = tempVector;
		
		mContext.runOnUiThread(new Runnable() {
			@Override
			public void run() {
				mCreatingDialog = new PSDialog(mContext).setCancelable(false)
						.setMessage(message).setTitle(title)
						.setLuaListener(listener)
						.setListener(mPSDialogListener)
						.setTheme(nTheme)
						.setIcon(mAppIcon);

				for (int i = 0; i < buttonTitlesVector.size(); i++) {
					addAlertButton(buttonTitlesVector.get(i));
				}

				if (mShowingDialog != null && mShowingDialog.isShowing()) {
					mShowingDialogs.add(mShowingDialog);
					mShowingDialog.hide();
				}

				mCreatingDialog.show();
				mShowingDialog = mCreatingDialog;
				mCreatingDialog = null;
			}
		});
	}

//	@Deprecated
//	/**
//	 * this function will appear thread unsafe problem...
//	 */
//	public static void createAlert(final String title, final String message,
//			final String defalutButtonTitle, final int listener) {
//		if (mContext == null) {
//			return;
//		}
//
//		mContext.runOnUiThread(new Runnable() {
//			@Override
//			public void run() {
//				mCreatingDialog = new PSDialog(mContext).setCancelable(false)
//						.setMessage(message).setTitle(title)
//						.setLuaListener(listener)
//						.setListener(mPSDialogListener);
//
//				addAlertButton(defalutButtonTitle);
//
//				if (mShowingDialog != null && mShowingDialog.isShowing()) {
//					mShowingDialogs.add(mShowingDialog);
//					mShowingDialog.hide();
//				}
//
//				mCreatingDialog.show();
//				mShowingDialog = mCreatingDialog;
//				mCreatingDialog = null;
//			}
//		});
//	}

	public static int addAlertButton(final String buttonTitle) {
		if (mCreatingDialog == null)
			return 0;

		return mCreatingDialog.addAlertButton(buttonTitle);
	}

	public static void showAlert() {
		if (mCreatingDialog == null) {
			return;
		}

		mContext.runOnUiThread(new Runnable() {
			@Override
			public void run() {
				if (mShowingDialog != null && mShowingDialog.isShowing()) {
					mShowingDialogs.add(mShowingDialog);
					mShowingDialog.hide();
				}

				mCreatingDialog.show();
				mShowingDialog = mCreatingDialog;
				mCreatingDialog = null;
			}
		});
	}

	public static void showAlertLua(final String luaFunctionId) {
		if (mCreatingDialog == null) {
			return;
		}

		CocosHelper.runOnGameThread(new Runnable() {
			@Override
			public void run() {
				mCreatingDialog.setLuaListener(luaFunctionId);
				showAlert();
			}
		});
	}

	public static void cancelAlert() {
		if (mShowingDialog == null)
			return;

		mContext.runOnUiThread(new Runnable() {
			@Override
			public void run() {
				mShowingDialog.dismiss();
				mShowingDialog = null;
			}
		});
	}

	public static void showPreAlert() {
		if (mShowingDialogs.size() > 0) {
			mShowingDialog = mShowingDialogs.firstElement();
			mShowingDialogs.remove(0);
			mShowingDialog.show();
		} else {
			mShowingDialog = null;
		}
	}

	public static void openURL(String url) {
		if (mContext == null) {
			return;
		}
		Uri uri = Uri.parse(url);
		mContext.startActivity(new Intent(Intent.ACTION_VIEW, uri));
	}

	public static void updateAndroidAPK(String url) {
		if (mContext == null) {
			return;
		}
//		UpdateManager.getInstance().startToUpdate(url);
	}

	public static String getInputText(String title, String message,
			String defaultValue) {
		return "";
	}

	private static String getMacAddress() {
		WifiManager wifi = (WifiManager) mContext.getApplicationContext()
				.getSystemService(Context.WIFI_SERVICE);
		WifiInfo info = wifi.getConnectionInfo();
		if (info == null)
			return null;
		return info.getMacAddress();
	}

//	public static String getOpenUDID() {
//		String id = getMacAddress();
//		if (id == null) {
//			id = getIdentity();
//		}
//		if (id == null) {
//			id = "";
//		}
//		return id;
//	}

//	public static String getIdentity() {
//		String identity = Cocos2dxHelper.getStringForKey(GUID_STORE_KEY, "");
//		if (identity.isEmpty()) {
//			identity = java.util.UUID.randomUUID().toString();
//			Cocos2dxHelper.getStringForKey(GUID_STORE_KEY, identity);
//		}
//		return identity;
//	}

	public static String getDeviceName() {
		return Build.USER;
	}

	public static void vibrate(int time) {
//		if (mVibrator == null) {
//			return;
//		}
//		mVibrator.vibrate((long)time);
	}

	public static void vibrate(long[] pattern, int repeatcout) {
//		if (mVibrator == null) {
//			return;
//		}
//		mVibrator.vibrate(pattern, repeatcout);
	}

	public static Context getAppContext() {
		return mContext;
	}
	
	public static void showActivityIndicator() {
		if (mIndicatorDialog == null) {
			mContext.runOnUiThread(new Runnable() {
				@Override
				public void run() {
					mIndicatorDialog = new Dialog(mContext);
					mIndicatorDialog.getWindow().setBackgroundDrawable(new ColorDrawable(0));
					mIndicatorDialog.requestWindowFeature(Window.FEATURE_NO_TITLE);
					ProgressBar pb = new ProgressBar(mContext);
				    RelativeLayout.LayoutParams lp = new RelativeLayout.LayoutParams(ViewGroup.LayoutParams.WRAP_CONTENT, ViewGroup.LayoutParams.WRAP_CONTENT);    
				    lp.addRule(RelativeLayout.CENTER_IN_PARENT, RelativeLayout.TRUE); 
				    mIndicatorDialog.addContentView(pb, lp);
				    mIndicatorDialog.show();
				}
			});
		}

	}
	
	public static void hideActivityIndicator() {
		if (mIndicatorDialog == null) {
			return;
		}
		mIndicatorDialog.dismiss();
		mIndicatorDialog = null;

	}
}