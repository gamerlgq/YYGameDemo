package com.yyGame.lib;

import android.app.Activity;
import android.app.AlertDialog;
import android.content.DialogInterface;
import android.graphics.drawable.Drawable;

import com.cocos.lib.CocosHelper;
import com.cocos.lib.CocosJavascriptJavaBridge;

import org.json.JSONObject;

import java.util.HashMap;
import java.util.Map;
import java.util.Vector;

public class PSDialog {
	public interface PSDialogListener {
		void onDismiss(PSDialog dialog);
	}

	private AlertDialog mDialog = null;

	private String mDialogLuaListener;
	private Activity mContext = null;
	private DialogInterface.OnClickListener mDialogClickListener = null;
	private PSDialogListener mPSDialogListener = null;

	private boolean mCancelable = true;
	private String mTitle = null;
	private String mMessage = null;
	private Drawable mIcon = null;
	private int mTheme = AlertDialog.THEME_DEVICE_DEFAULT_DARK;
	private Vector<String> mButtonLabels = new Vector<String>();

	public PSDialog(Activity context) {
		mContext = context;

		mDialogClickListener = new DialogInterface.OnClickListener() {
			@Override
			public void onClick(final DialogInterface dialog, final int which) {
				if (mDialogLuaListener != null) {
					CocosHelper.runOnGameThread(new Runnable() {
						@Override
						public void run() {
							Map<String, String> map = new HashMap<String, String>();
							map.put("buttonIndex", String.valueOf(-which));
							System.out.println(-which);
							JSONObject jObject = new JSONObject(map);
							CocosJavascriptJavaBridge.evalString(String.format(mDialogLuaListener + "(%s)",jObject.toString()));
						}
					});
				}
				dismiss();
			}
		};
	}

	public PSDialog setListener(PSDialogListener listener) {
		mPSDialogListener = listener;
		return this;
	}

	public PSDialog setCancelable(boolean flag) {
		mCancelable = flag;
		return this;
	}

	public PSDialog setTitle(String title) {
		mTitle = title;
		return this;
	}

	public PSDialog setMessage(String msg) {
		mMessage = msg;
		return this;
	}

	public PSDialog setLuaListener(String listener) {
		mDialogLuaListener = listener;
		return this;
	}

	public PSDialog setIcon(Drawable icon) {
		mIcon = icon;
		return this;
	}
	
	public PSDialog setTheme(int nTheme) {
		mTheme = nTheme;
		return this;
	}
	

	public int getButtonsCount() {
		return mButtonLabels.size();
	}

	public int addAlertButton(String buttonTitle) {
		if (mButtonLabels.size() >= 3)
			return mButtonLabels.size();

		mButtonLabels.add(buttonTitle);
		return mButtonLabels.size();
	}

	public boolean isShowing() {
		if (mDialog == null)
			return false;
		return mDialog.isShowing();
	}

	public void hide() {
		if (mDialog == null || !isShowing())
			return;
		mDialog.dismiss();
		mDialog = null;
	}

	public void dismiss() {
		if (mDialog == null || !isShowing())
			return;
		mDialog.dismiss();

		if (mPSDialogListener != null) {
			mPSDialogListener.onDismiss(this);
		}

		mDialog = null;
	}

	public void show() {
		if (mDialog != null && isShowing()) {
			mDialog.dismiss();
			return;
		}

		AlertDialog.Builder builder = new AlertDialog.Builder(mContext, mTheme)
			.setCancelable(mCancelable)
			.setTitle(mTitle)
			.setMessage(mMessage);

		for (int i = 0; i < mButtonLabels.size(); i++) {
			switch (i) {
			case 0:
				builder.setPositiveButton(mButtonLabels.elementAt(i), mDialogClickListener);
				break;
			case 1:
				builder.setNegativeButton(mButtonLabels.elementAt(i), mDialogClickListener);
				break;
			case 2:
				builder.setNeutralButton(mButtonLabels.elementAt(i), mDialogClickListener);
				break;
			default:
				break;
			}
		}
		
		mDialog = builder.create();
		if (mTitle != null && mTitle.length() > 0 && mIcon != null) {
			mDialog.setIcon(mIcon);
		}
		mDialog.show();
	}
}
