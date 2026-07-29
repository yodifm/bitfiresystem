<?php

namespace App\Filament\Resources;

use App\Filament\Resources\ValuePropResource\Pages;
use App\Filament\Resources\ValuePropResource\RelationManagers;
use App\Models\ValueProp;
use Filament\Forms;
use Filament\Forms\Form;
use Filament\Resources\Resource;
use Filament\Tables;
use Filament\Tables\Table;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\SoftDeletingScope;

class ValuePropResource extends Resource
{
    protected static ?string $model = ValueProp::class;

    protected static ?string $navigationIcon = 'heroicon-o-sparkles';

    protected static ?string $navigationGroup = 'Konten Website';

    protected static ?string $navigationLabel = 'Kenapa Pilih Kami';

    public static function form(Form $form): Form
    {
        return $form
            ->schema([
                Forms\Components\TextInput::make('title_id')
                    ->label('Judul (Bahasa Indonesia)')
                    ->required()
                    ->maxLength(255),
                Forms\Components\TextInput::make('title_en')
                    ->label('Judul (English)')
                    ->required()
                    ->maxLength(255),
                Forms\Components\TextInput::make('title_zh')
                    ->label('Judul (中文)')
                    ->required()
                    ->maxLength(255),
                Forms\Components\Textarea::make('desc_id')
                    ->label('Deskripsi (Bahasa Indonesia)')
                    ->required()
                    ->columnSpanFull(),
                Forms\Components\Textarea::make('desc_en')
                    ->label('Deskripsi (English)')
                    ->required()
                    ->columnSpanFull(),
                Forms\Components\Textarea::make('desc_zh')
                    ->label('Deskripsi (中文)')
                    ->required()
                    ->columnSpanFull(),
                Forms\Components\TextInput::make('sort_order')
                    ->label('Urutan Tampil')
                    ->required()
                    ->numeric()
                    ->default(0),
            ]);
    }

    public static function table(Table $table): Table
    {
        return $table
            ->defaultSort('sort_order')
            ->reorderable('sort_order')
            ->columns([
                Tables\Columns\TextColumn::make('title_id')
                    ->label('Judul (ID)')
                    ->searchable(),
                Tables\Columns\TextColumn::make('sort_order')
                    ->numeric()
                    ->sortable(),
            ])
            ->filters([
                //
            ])
            ->actions([
                Tables\Actions\EditAction::make(),
                Tables\Actions\DeleteAction::make(),
            ])
            ->bulkActions([
                Tables\Actions\BulkActionGroup::make([
                    Tables\Actions\DeleteBulkAction::make(),
                ]),
            ]);
    }

    public static function getRelations(): array
    {
        return [
            //
        ];
    }

    public static function getPages(): array
    {
        return [
            'index' => Pages\ListValueProps::route('/'),
            'create' => Pages\CreateValueProp::route('/create'),
            'edit' => Pages\EditValueProp::route('/{record}/edit'),
        ];
    }
}
