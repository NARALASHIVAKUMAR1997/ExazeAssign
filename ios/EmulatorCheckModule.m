
#import "EmulatorCheckModule.h"

@implementation EmulatorCheckModule

RCT_EXPORT_MODULE();

RCT_EXPORT_METHOD(isEmulator:(RCTResponseSenderBlock)callback) {
    BOOL isSimulator = NO;
  
#if TARGET_OS_SIMULATOR
    isSimulator = YES;
#endif

   callback(@[@(isSimulator)]);

}

@end
