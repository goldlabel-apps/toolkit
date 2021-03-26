# @ToolKit

## @PingPong

1. Fetch `{baseurl}/ping/` and check that the response looks like this

```javascript
	response: {
		status: 200,
		data: {
			message: "pong"
		}
	}
```

If NO 
Feedback __API not connected__ & gracefully exit 

If YES 
Set redux flag `APIconnected` to `true` 

![Listingslab @ToolKit](../png/react_wordpress.png)

