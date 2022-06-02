import cv2

img = cv2.imread('./HK.png')

scale = 0.7
width = int(img.shape[1] * scale)
height = int(img.shape[0] * scale)

dim = (width, height)

cv2.resize(img, dim, interpolation=cv2.INTER_AREA)
cv2.imwrite("HK.webp", img, [cv2.IMWRITE_WEBP_QUALITY, 95])