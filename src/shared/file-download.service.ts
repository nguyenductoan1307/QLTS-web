 // tslint:disable
 import { Injectable } from '@angular/core';
import { AppConsts } from '@shared/AppConsts';
import { FileDto } from '@shared/service-proxies/service-proxies';

@Injectable()
export class FileDownloadService {

    downloadTempFile(file: FileDto) {
        const url = AppConsts.remoteServiceBaseUrl + '/File/DownloadTempFile?fileType=' + file.fileType + '&fileToken=' + file.fileToken + '&fileName=' + file.fileName;
        // TODO: This causes reloading of same page in Firefox
        location.href = url;
    }

    downloadDocFile(file: FileDto) {
        const url = AppConsts.remoteServiceBaseUrl + '/File/DownloadDocFileDeNghiThanhToan?fileType=' +
            file.fileType + '&fileToken=' + file.fileToken + '&fileName=' + file.fileName;
        // TODO: This causes reloading of same page in Firefox
        location.href = url;
    }
}
