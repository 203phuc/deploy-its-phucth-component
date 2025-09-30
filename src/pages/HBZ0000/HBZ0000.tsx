import { Button } from '@components/Atom/Button/Button';
import { Link } from '@components/Atom/Link';
import Toggle from '@components/Atom/Toggle/Toggle';
import { memo } from 'react';

// List & Columns Icons
import { FiveColumnsIcon } from '@components/Atom/Icons/icons/FiveColumnsIcon';
import { FourColumnsIcon } from '@components/Atom/Icons/icons/FourColumnsIcon';
import { HamburgerMenuIcon } from '@components/Atom/Icons/icons/HamburgerMenuIcon';
import { ThreeColumnsIcon } from '@components/Atom/Icons/icons/ThreeColumnsIcon';
import { TwoColumnsIcon } from '@components/Atom/Icons/icons/TwoColumnsIcon';

// Arrow Icons
import { ArrowDownIcon } from '@components/Atom/Icons/icons/ArrowDownIcon';
import { ArrowLeftIcon } from '@components/Atom/Icons/icons/ArrowLeftIcon';
import { ArrowRightIcon } from '@components/Atom/Icons/icons/ArrowRightIcon';
import { ArrowUpIcon } from '@components/Atom/Icons/icons/ArrowUpIcon';

// Other Icons
import { BagIcon } from '@components/Atom/Icons/icons/BagIcon';
import { BrandingIcon } from '@components/Atom/Icons/icons/BrandingIcon';
import { CreditCardIcon } from '@components/Atom/Icons/icons/CreditCardIcon';
import { EditIcon } from '@components/Atom/Icons/icons/EditIcon';
import { EmailIcon } from '@components/Atom/Icons/icons/EmailIcon';
import { EyeCloseIcon } from '@components/Atom/Icons/icons/EyeCloseIcon';
import { FacebookIcon } from '@components/Atom/Icons/icons/FacebookIcon';
import { HeartFilledIcon } from '@components/Atom/Icons/icons/HeartFilledIcon';
import { HeartIcon } from '@components/Atom/Icons/icons/HeartIcon';
import { InstagramIcon } from '@components/Atom/Icons/icons/InstagramIcon';
import { ListIcon } from '@components/Atom/Icons/icons/ListIcon';
import { LockIcon } from '@components/Atom/Icons/icons/LockIcon';
import { LogoutIcon } from '@components/Atom/Icons/icons/LogoutIcon';
import { MessageIcon } from '@components/Atom/Icons/icons/MessageIcon';
import { MoneyIcon } from '@components/Atom/Icons/icons/MoneyIcon';
import { NotFoundIcon } from '@components/Atom/Icons/icons/NotFoundIcon';
import { PhoneIcon } from '@components/Atom/Icons/icons/PhoneIcon';
import { PlayIcon } from '@components/Atom/Icons/icons/PlayIcon';
import { QuoteIcon } from '@components/Atom/Icons/icons/QuoteIcon';
import { SearchIcon } from '@components/Atom/Icons/icons/SearchIcon';
import { SettingIcon } from '@components/Atom/Icons/icons/SettingIcon';
import { StarFilledIcon } from '@components/Atom/Icons/icons/StarFilledIcon';
import { StarOutlinedIcon } from '@components/Atom/Icons/icons/StarOutlinedIcon';
import { TruckIcon } from '@components/Atom/Icons/icons/TruckIcon';
import { TwitterIcon } from '@components/Atom/Icons/icons/TwitterIcon';
import { UserIcon } from '@components/Atom/Icons/icons/UserIcon';
import { ViewIcon } from '@components/Atom/Icons/icons/ViewIcon';
// Usage

const HBZ0000Component = () => {
  return (
    <div className="flex flex-col gap-2 p-2">
      <Button variant="outlined" size="large">
        Hello from HAIBAZO ^_^
      </Button>
      <Link href="#">Hello from HAIBAZO ^_^</Link>
      <Toggle />

      {/* Icons Section */}
      <div className="mt-4">
        <h3 className="mb-2 text-lg font-medium">List & Columns Icons</h3>
        <div className="flex flex-wrap items-center gap-4 rounded bg-gray-50 p-4">
          <ListIcon size={24} color="currentColor" />
          <TwoColumnsIcon size={24} color="currentColor" />
          <ThreeColumnsIcon size={24} color="currentColor" />
          <FourColumnsIcon size={24} color="currentColor" />
          <FiveColumnsIcon size={24} color="currentColor" />
          <HamburgerMenuIcon size={24} color="currentColor" />
          <QuoteIcon size={24} color="currentColor" />
          <MessageIcon size={24} color="currentColor" />
        </div>
      </div>

      {/* Action Icons Section */}
      <div className="mt-6">
        <h3 className="mb-2 text-lg font-medium">Action Icons</h3>
        <div className="flex flex-wrap items-center gap-4 rounded bg-gray-50 p-4">
          <UserIcon size={24} color="currentColor" />
          <HeartIcon size={24} color="currentColor" />
          <BagIcon size={24} color="currentColor" />
          <SearchIcon size={24} color="currentColor" />
          <LogoutIcon size={24} color="currentColor" />
          <EditIcon size={24} color="currentColor" />
          <PhoneIcon size={24} color="currentColor" />
        </div>
      </div>

      {/* Arrow Icons Section */}
      <div className="mt-6">
        <h3 className="mb-2 text-lg font-medium">Arrow Icons</h3>
        <div className="flex flex-wrap items-center gap-4 rounded bg-gray-50 p-4">
          <ArrowUpIcon size={24} color="currentColor" />
          <ArrowDownIcon size={24} color="currentColor" />
          <ArrowLeftIcon size={24} color="currentColor" />
          <ArrowRightIcon size={24} color="currentColor" />
          <ViewIcon size={24} color="currentColor" />
        </div>
      </div>

      {/* Rating Icons Section */}
      <div className="mt-6">
        <h3 className="mb-2 text-lg font-medium">Rating Icons</h3>
        <div className="flex flex-wrap items-center gap-4 rounded bg-gray-50 p-4">
          <div className="flex items-center gap-2">
            <StarFilledIcon size={32} />
            <StarFilledIcon size={32} />
            <StarFilledIcon size={32} />
            <StarOutlinedIcon size={32} />
            <StarOutlinedIcon size={32} />
            <span className="ml-2 text-sm text-gray-500">3.0/5.0</span>
          </div>
          <div className="flex items-center gap-1">
            <StarFilledIcon size={16} color="#F59E0B" />
            <StarFilledIcon size={16} color="#F59E0B" />
            <StarFilledIcon size={16} color="#F59E0B" />
            <StarFilledIcon size={16} color="#F59E0B" />
            <StarOutlinedIcon size={16} color="#F59E0B" />
            <span className="ml-2 text-sm text-gray-500">4.0/5.0</span>
          </div>
        </div>
      </div>

      {/* Eye Close Icons Section */}
      <div className="mt-6">
        <h3 className="mb-2 text-lg font-medium">Eye Close Icons</h3>
        <div className="flex flex-wrap items-center gap-4 rounded bg-gray-50 p-4">
          <EyeCloseIcon size={24} color="currentColor" />
          <EmailIcon size={24} color="currentColor" />
          <TwitterIcon size={24} color="currentColor" />
          <InstagramIcon size={24} color="currentColor" />
          <FacebookIcon size={24} color="currentColor" />
          <LockIcon size={24} color="currentColor" />
          <MoneyIcon size={24} color="currentColor" />
          <TruckIcon size={24} color="currentColor" />
          <SettingIcon size={24} color="currentColor" />
          <CreditCardIcon size={24} color="currentColor" />
          <PlayIcon size={24} color="currentColor" />
          <BrandingIcon size={24} color="currentColor" />
          <NotFoundIcon size={64} color="currentColor" />
          <HeartIcon size={24} color="currentColor" />
          <HeartFilledIcon size={24} color="#E25563" />
        </div>
      </div>
    </div>
  );
};

export const HBZ0000 = memo(HBZ0000Component);
